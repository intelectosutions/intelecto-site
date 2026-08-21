/**
 * Servidor do site. Duas responsabilidades:
 *   1. servir a landing publica (public/) sem autenticacao;
 *   2. servir o painel interno e sua API, protegidos por Basic Auth.
 *
 * A chave do SendGrid fica so aqui no servidor. O painel nunca a recebe: ele
 * consome /api/painel, que consulta a API e devolve apenas o consolidado.
 *
 * A conta SendGrid e compartilhada com o e-mail transacional das prefeituras,
 * entao toda consulta filtra pelo remetente da prospeccao. Sem esse filtro o
 * painel exibiria correspondencia de outros clientes.
 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORTA = process.env.PORT || 80;
const PUBLIC = path.join(__dirname, "public");
const CHAVE = process.env.SENDGRID_API_KEY || "";
const REMETENTE = process.env.PROSPECCAO_FROM || "luiz@camaras.intelecto.solutions";
const USUARIO = process.env.PAINEL_USER || "";
const SENHA = process.env.PAINEL_PASS || "";

const TIPOS = {
  ".html": "text/html; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".jpg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml",
  ".ico": "image/x-icon", ".webp": "image/webp",
};

function autorizado(req) {
  if (!USUARIO || !SENHA) return false;          // sem credencial definida, nega
  const h = req.headers.authorization || "";
  if (!h.startsWith("Basic ")) return false;
  const [u, p] = Buffer.from(h.slice(6), "base64").toString("utf8").split(":");
  return u === USUARIO && p === SENHA;
}

function pedirLogin(res) {
  res.writeHead(401, {
    "WWW-Authenticate": 'Basic realm="Painel da Prospeccao", charset="UTF-8"',
    "Content-Type": "text/plain; charset=utf-8",
  });
  res.end("Acesso restrito.\n");
}

// cache curto: o painel pode ser recarregado varias vezes seguidas e a API
// do SendGrid tem limite de requisicoes
let cache = { quando: 0, dados: null };

async function sendgrid(caminho) {
  const r = await fetch("https://api.sendgrid.com/v3" + caminho, {
    headers: { Authorization: "Bearer " + CHAVE },
  });
  if (!r.ok) throw new Error(`SendGrid ${r.status} em ${caminho}`);
  return r.json();
}

function diaISO(offset) {
  const d = new Date(Date.now() + offset * 86400000);
  return d.toISOString().slice(0, 10);
}

async function motivosDeFalha() {
  // um request por mensagem seria caro; as listas de supressao ja trazem o motivo
  const motivos = {};
  for (const rota of ["/suppression/bounces", "/suppression/blocks"]) {
    try {
      const lista = await sendgrid(rota + "?limit=500");
      for (const b of lista || []) {
        if (b.email) motivos[b.email.toLowerCase()] = (b.reason || "").slice(0, 120);
      }
    } catch (e) { /* motivo é complementar: sem ele o painel segue funcionando */ }
  }
  return motivos;
}

async function atividade() {
  // Email Activity: detalhe por destinatario, so do remetente da prospeccao
  const q = encodeURIComponent(`from_email="${REMETENTE}"`);
  const [d, motivos] = await Promise.all([
    sendgrid(`/messages?limit=200&query=${q}`),
    motivosDeFalha(),
  ]);
  const msgs = (d.messages || []).map((m) => ({
    para: m.to_email,
    assunto: m.subject,
    status: m.status,
    quando: m.last_event_time,
    aberturas: m.opens_count || 0,
    cliques: m.clicks_count || 0,
    motivo: motivos[(m.to_email || "").toLowerCase()] || "",
  }));
  const resumo = { enviados: msgs.length, abriram: 0, clicaram: 0, falharam: 0 };
  for (const m of msgs) {
    if (m.aberturas > 0) resumo.abriram++;
    if (m.cliques > 0) resumo.clicaram++;
    if (["bounce", "blocked", "dropped"].includes(m.status)) resumo.falharam++;
  }
  return { resumo, mensagens: msgs };
}

async function estatisticas() {
  const s = await sendgrid(`/stats?start_date=${diaISO(-14)}&aggregated_by=day`);
  return (s || []).map((d) => {
    const m = (d.stats && d.stats[0] && d.stats[0].metrics) || {};
    return {
      data: d.date, entregues: m.delivered || 0, aberturas: m.unique_opens || 0,
      cliques: m.unique_clicks || 0, bounces: m.bounces || 0, spam: m.spam_reports || 0,
    };
  });
}

async function montarPainel() {
  if (cache.dados && Date.now() - cache.quando < 60000) return cache.dados;

  const base = JSON.parse(fs.readFileSync(path.join(__dirname, "painel_dados.json"), "utf8"));
  const dados = { ...base, sendgrid: null, erro_sendgrid: null };

  if (CHAVE) {
    try {
      const [a, s] = await Promise.all([atividade(), estatisticas()]);
      dados.sendgrid = { ...a, series: s };
    } catch (e) {
      // painel continua util com os dados locais mesmo se a API falhar
      dados.erro_sendgrid = String(e.message || e);
    }
  } else {
    dados.erro_sendgrid = "SENDGRID_API_KEY nao configurada no servidor";
  }

  cache = { quando: Date.now(), dados };
  return dados;
}

function servirArquivo(res, arquivo, cabecalhos = {}) {
  fs.readFile(arquivo, (err, buf) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Nao encontrado.\n");
    }
    res.writeHead(200, {
      "Content-Type": TIPOS[path.extname(arquivo)] || "application/octet-stream",
      "X-Content-Type-Options": "nosniff",
      ...cabecalhos,
    });
    res.end(buf);
  });
}

const servidor = http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://local");
  const rota = decodeURIComponent(url.pathname);

  if (rota === "/health") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    return res.end("ok\n");
  }

  // area restrita
  if (rota === "/painel" || rota.startsWith("/painel/") || rota.startsWith("/api/")) {
    if (!autorizado(req)) return pedirLogin(res);

    if (rota.startsWith("/api/painel")) {
      try {
        const dados = await montarPainel();
        res.writeHead(200, { "Content-Type": TIPOS[".json"], "Cache-Control": "no-store" });
        return res.end(JSON.stringify(dados));
      } catch (e) {
        res.writeHead(500, { "Content-Type": TIPOS[".json"] });
        return res.end(JSON.stringify({ erro: String(e.message || e) }));
      }
    }
    // injeta os dados na propria pagina, em vez de deixar o painel buscar por
    // fetch: uma requisicao a menos e nenhum problema de credencial no browser
    try {
      const dados = await montarPainel();
      const html = fs.readFileSync(path.join(PUBLIC, "painel", "index.html"), "utf8")
        .replace("__DADOS__", JSON.stringify(dados).replace(/</g, "\\u003c"));
      res.writeHead(200, { "Content-Type": TIPOS[".html"], "Cache-Control": "no-store" });
      return res.end(html);
    } catch (e) {
      res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("Falha ao montar o painel: " + (e.message || e) + "\n");
    }
  }

  // conteudo publico
  let alvo = path.join(PUBLIC, rota === "/" ? "index.html" : rota.replace(/^\/+/, ""));
  if (!alvo.startsWith(PUBLIC)) {                  // barra travessia de diretorio
    res.writeHead(400, { "Content-Type": "text/plain" });
    return res.end("Requisicao invalida.\n");
  }
  if (fs.existsSync(alvo) && fs.statSync(alvo).isDirectory()) alvo = path.join(alvo, "index.html");
  if (!fs.existsSync(alvo)) alvo = path.join(PUBLIC, "index.html");
  servirArquivo(res, alvo, { "Cache-Control": "public, max-age=300" });
});

servidor.listen(PORTA, () => console.log("site no ar na porta " + PORTA));
