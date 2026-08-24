# Direção de arte: avaliação, vencedora e especificação final
**Site institucional Intelecto Solutions · decisão de 21/08/2026**

---

## 1. Ranking justificado

### 1º lugar: Anexo I

Ganha porque é a única das três que resolve o problema real da Intelecto, que não é "parecer bonita" e sim **parecer sólida sendo pequena, sem mentir**. Empresa de uma pessoa não vence a Instar em número (490 órgãos contra 14), então tem que vencer em outra métrica, e a única disponível é **verificabilidade**: dado com fonte e data, cliente com nome e link ao vivo, infraestrutura descrita com localização, limites documentados, CNPJ visível. Anexo I é a direção que trata cada afirmação como algo que vai ser conferido, porque vai mesmo.

Segundo: ela é a única que atende quem de fato move o processo. O presidente autoriza, mas quem monta o processo administrativo, quem teme o Tribunal de Contas e quem procura minuta de termo de referência às 17h de sexta é o diretor administrativo. Nenhum dos doze concorrentes do dossiê entrega isso mastigado. Anexo I entrega, e essa é uma vantagem competitiva que custa quatro páginas de HTML.

Terceiro: é a mais barata de manter. HTML estático, tabelas, hairlines, zero dependência de screenshot bonito ou de prazo que expira. Uma pessoa consegue manter isso por três anos.

O defeito dela é real e está no próprio texto da direção: 17 seções e três tabelas não é o que um presidente de câmara de 8 mil habitantes lê no celular. Isso se conserta com poda e enxerto, não com troca de direção.

### 2º lugar: Tela Aberta

Tem o melhor ativo isolado das três: **o Mirante e o Conformis existem, estão em produção, e a URL do cliente aparece na barra da moldura**. Nenhum concorrente do dossiê pode copiar isso sem ter o produto. A Nuvem Legislativa, que vende exatamente o mesmo e-mail .leg.br, não mostra um único cliente nomeado. Prova por link ao vivo é o movimento mais forte e mais barato disponível.

Mas como princípio organizador do site inteiro ela é frágil por quatro motivos: screenshot envelhece e denuncia abandono; screenshot é o pior inimigo do mobile e do LCP na máquina velha da câmara; a tese depende de o Mirante estar visualmente impecável em todas as telas escolhidas, o que é uma aposta em algo que ainda não foi auditado; e software em close não é a linguagem de um político, que não avalia interface, avalia se o fornecedor some no meio do mandato.

Vitrine é uma **seção excelente**, não é uma tese de site.

### 3º lugar: Comunicado 2027

Tem o melhor gancho e a pior arquitetura. O prazo de maio de 2027 é a única vantagem estrutural que a Intelecto tem sobre a Instar, e a roupa de comunicado datado (Fiorilli, Betha) é exatamente o registro certo para ele. Mas como espinha do site inteiro ela comete três erros graves:

1. **Serve 15% do mercado mapeado.** Dos 3.138 domínios ativos, só 482 têm MX Interlegis. Os 1.250 sem e-mail nenhum, que são o maior bolsão de leads e o caso que originou o cliente Luz/MG, abrem a home, leem que o mundo acaba em maio de 2027, concluem em quatro segundos que não é com eles e fecham.
2. **Tem data de validade impressa.** Em maio de 2027 o site inteiro vira campanha vencida, e se o Senado prorrogar (coisa comum em desativação de serviço público) a peça central vira desinformação com o concorrente apontando.
3. **Monotema sufoca as outras seis linhas.** O site precisa vender portal, LGPD, sistemas e DPO para empresa privada. Com Interlegis em tudo, o gestor de TI da média empresa procurando DPO não encontra uma linha escrita para ele.

Além disso, prazo grande na tela é o formato do falso boleto. Presidente de câmara recebe golpe por e-mail toda semana, e esse é o risco de leitura mais caro dos três.

O lugar certo do Comunicado 2027 não é a home. É a **página /email-leg-br**, que é a mesma peça que vai rodar em `camara.intelecto.solutions` para a prospecção fria já decidida no projeto. Ali ele é imbatível.

---

## 2. A vencedora, com os enxertos

**Direção final: Anexo I, com vitrine e comunicado.**

**Tese:** o site é a peça que o servidor imprime e anexa ao processo. Cada afirmação tem fonte, data e número conferível; a carteira é uma tabela com link para o que está no ar; o caminho da Lei 14.133 está na página e não atrás de "fale com o comercial". A urgência de maio de 2027 é uma faixa de comunicado datado e uma página de serviço inteira, nunca o assunto do site.

### O que peguei de Tela Aberta

1. **A moldura de produto com a URL real na barra, e ela vai para o hero.** Substituo a TABELA 1 da coluna direita do hero pelo portal da Câmara de Jaguariúna em produção. Motivo: o hero precisa de uma coisa que um presidente entenda em dois segundos, e "o portal da câmara vizinha, no ar, com o endereço na barra" é isso. A tabela dos 3.138 domínios desce para a seção de diagnóstico, onde ela apoia o veredito em vez de competir com o H1.
2. **O tour em abas do Mirante**, mas só em /transparencia, não na home. Cinco telas reais de tenants diferentes, com a URL trocando junto, provam multi-tenant sem uma linha de texto.
3. **O micro-resultado embaixo de cada logo** (padrão Vanta). Nove logos com dado batem trinta logos mudas, e com 21 clientes cada célula passa a carregar informação própria.
4. **O bloco de infraestrutura em fundo escuro**, única seção invertida da página. Marca o território técnico e quebra a monotonia de uma página branca muito longa.
5. **A auto-seleção por perfil** (padrão Clariti), que as duas outras direções listaram como risco e nenhuma implementou. Vira seção de verdade: três âncoras nomeadas por quem lê.

### O que peguei de Comunicado 2027

1. **A faixa de comunicado numerada e datada**, logo abaixo do header, nas cinco páginas. É o melhor elemento isolado daquela direção, custa uma tira de 56px, transforma o site em fonte de notícia setorial e alimenta a busca por "e-mail interlegis desativado".
2. **Os quatro vereditos do diagnóstico**, e este é o enxerto mais importante de todos. Comunicado 2027 foi a única que escreveu os quatro casos (MX Interlegis, sem e-mail, outro provedor, não encontrado). Isso conserta o buraco de 85% do funil: quem não tem o problema do prazo sai com outra conversa aberta, inclusive a de intermediação de domínio.
3. **O marcador de prazo estático gerado no build**, em meses, com data de aferição e link para a fonte do Senado. Só na página /email-leg-br. Nada de contador animado.
4. **A frase-faca do diagrama:** "delegação de NS derruba o Portal Modelo e o SAPL. Nunca peça isso ao Interlegis, e desconfie de quem pedir." É conhecimento que nenhum concorrente documenta e é um ataque à Instar sem citar a Instar.
5. **O bloco prazo mais orçamento.** Câmara não contrata por urgência, contrata por dotação. "A hora de colocar isso na LOA é agora" é a frase que converte, e as outras duas direções não tinham.
6. **A quinta e a sexta páginas obrigatórias:** /licitacao e /acessibilidade.

### O que rejeito das três, explicitamente

- **A tabela por UF fica fora do ar.** Anexo I e Comunicado 2027 queriam publicá-la. Publicar quantas câmaras de MG, PR e SP estão com MX Interlegis é entregar o mapa de prospecção pronto para a Instar. Publica-se o total nacional e o veredito por município consultado.
- **A tabela fechada de preços fica fora.** Contraria a decisão do Luiz de 20/08 (proposta caso a caso) e queima a margem de Coité. Publica-se a **lógica** (por número de contas e por haver ou não migração) mais uma única âncora "a partir de", que já entrega o fator de transparência sem virar tabela pública.
- **A serifa em títulos sai.** Source Serif 4 é bonita e é aposta de cara ou coroa com este público: lê como edital para quem se pretende e como jornal antigo para quem bate o olho, que é o vizinho estético do "site de prefeitura dos anos 2000". O ar de documento vem do layout, das hairlines, das figuras numeradas e do monospace nos rótulos, não da serifa. Ganha-se de brinde uma família a menos no caminho crítico de uma internet de câmara do interior.

---

## 3. Especificação final e implementável

### 3.1 Paleta

Todos os tokens definidos em `:root` puro na versão clara. No escuro **apenas redefinir tokens**, em `@media (prefers-color-scheme: dark){ :root:not([data-theme="light"]) }` e de novo em `:root[data-theme="dark"]`. Nenhuma cor pode existir só dentro de media query.

**Tema claro**

| Token | Hex | Papel |
|---|---|---|
| `--bg` | `#FFFFFF` | fundo da página |
| `--surface` | `#F5F8FB` | painéis, cards, sumário lateral |
| `--surface-2` | `#E9EEF5` | zebra de tabela, chrome da moldura |
| `--line` | `#D6DEE9` | hairline de 1px, recurso principal de separação |
| `--line-strong` | `#B7C3D2` | moldura de seção, cabeçalho de tabela |
| `--title` | `#16283F` | h1 a h4 (aprox. 14,9:1 no branco) |
| `--text` | `#333B45` | corpo (aprox. 11,3:1) |
| `--mute` | `#4B5563` | legenda, rótulo (aprox. 7,6:1; o `#6B7280` antigo cai para 4,4:1 sobre painel tintado e sai da paleta) |
| `--acao` | `#1351B4` | link e botão primário (7,3:1, passa AAA; é o azul institucional do gov.br) |
| `--acao-hover` | `#0E3F8C` | hover do primário |
| `--acao-sutil` | `#E7EFFC` | fundo de badge, aba ativa, linha destacada |
| `--accent` | `#2563EB` | o azure das propostas, rebaixado a cor de dado: traço de diagrama, estado ativo, filete de citação |
| `--alerta-bg` | `#FDF6EC` | faixa de comunicado |
| `--alerta-line` | `#B45309` | filete de 3px à esquerda |
| `--alerta-text` | `#92400E` | texto do comunicado (aprox. 6,6:1 sobre o próprio fundo) |
| `--ok` | `#14663F` | check de garantia, botão de WhatsApp |
| `--foco-bg` | `#FFDD00` | estado de foco (GOV.UK) |
| `--foco-ink` | `#0B0C0C` | texto do foco |
| `--placa-logo` | `transparent` | pastilha atrás do brasão |

**Tema escuro**

| Token | Hex |
|---|---|
| `--bg` | `#0E1621` |
| `--surface` | `#16202D` |
| `--surface-2` | `#1D2A3A` |
| `--line` | `#24313F` |
| `--line-strong` | `#35465A` |
| `--title` | `#E8EDF4` |
| `--text` | `#D3DCE6` |
| `--mute` | `#9FB0C4` |
| `--acao` | `#6FA0FF` (aprox. 7:1 sobre `#0E1621`; o `#1351B4` não alcança 4,5:1 no escuro) |
| `--acao-hover` | `#A6C2FA` |
| `--acao-sutil` | `#16294A` |
| `--accent` | `#8FB4FF` |
| `--alerta-bg` | `#241B0F` |
| `--alerta-line` | `#B4762A` |
| `--alerta-text` | `#F0B463` |
| `--ok` | `#3DBF74` |
| `--foco-bg` / `--foco-ink` | idênticos ao claro |
| `--placa-logo` | `rgba(255,255,255,.94)` |

**Regras de cor não negociáveis**

- Vermelho não existe na paleta. Prazo é âmbar, cor de aviso de norma. Vermelho lido por político eleito vira chantagem.
- O navy nunca é fundo de página no escuro (fica lamacento). No claro ele é cor de título; no escuro ele deixa de existir.
- Superfícies se distinguem por 1px de `--line`, não por gradiente, sombra grande ou fundo colorido.
- `:root{color-scheme:light dark}` mais `:root[data-theme="light"]{color-scheme:light}` e `:root[data-theme="dark"]{color-scheme:dark}`, mais `<meta name="color-scheme" content="light dark">`. É isso que faz scrollbar, select e autofill acompanharem o tema.
- Script antiflash síncrono no `<head>`, antes do CSS: `(function(){var t=localStorage.getItem('tema');if(t)document.documentElement.dataset.theme=t})()`.
- `light-dark()` só como camada extra em detalhe inofensivo, nunca como base: é Baseline apenas desde maio de 2024 e o parque de máquinas do público é antigo.

### 3.2 Tipografia

Uma requisição, duas famílias, quatro faces:

```
https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&family=IBM+Plex+Mono:wght@500&display=swap
```
com `preconnect` para `fonts.googleapis.com` e `fonts.gstatic.com`, e `preload` só do woff2 do peso 600.

- **Public Sans 400** corpo, listas, tabelas. **600** títulos, botões, cabeçalho de tabela. **700** exclusivamente os números da faixa de métricas e das etapas. Fallback: `"Public Sans", system-ui, "Segoe UI", Arial, sans-serif`. Escolhida por procedência: nasceu no U.S. Web Design System, tem esqueleto neutro e nenhum sinal de agência.
- **IBM Plex Mono 500** apenas em kicker, overline de seção, etiqueta de figura (`FIG. 1`, `TABELA 2`), número de comunicado, registro DNS (MX, SPF, DKIM), URL dentro da moldura, CNPJ e SLA. Nunca em texto corrido. Fallback: `ui-monospace, SFMono-Regular, Consolas, monospace`.
- Proibidas: Poppins, Montserrat, Nunito e qualquer geométrica arredondada.

**Escala modular em tokens, base 17px, razão 1,25.** Nenhum `font-size` solto fora dos tokens.

```
--step--1: .8rem     /* 13,6px  overline, legenda, micro-resultado */
--step-0:  1rem      /* 17px    corpo */
--step-1:  1.25rem   /* 21,25px lead, subtítulo */
--step-2:  1.5625rem /* 26,5px  h3 */
--step-3:  1.953rem  /* 33,2px  h2 */
--step-4:  2.441rem  /* 41,5px  número de etapa */
--step-5:  3.052rem  /* 51,9px  número da faixa de métricas */
html { font-size: 17px }
h1 { font-size: clamp(2rem, 1.2rem + 3.2vw, 3.25rem); font-weight:600; line-height:1.12; letter-spacing:-.02em }
```

Base 17px e não os 14px do gov.br porque o leitor é mais velho. Corpo com `line-height:1.65`. `--medida: 65ch` aplicado como `max-width` em todo `p` e `li`, inclusive dentro de grid largo. `text-wrap: balance` em h1, h2, h3 e blockquote; `text-wrap: pretty` em p. `font-variant-numeric: tabular-nums` em toda tabela e em toda faixa de números. Overline em Plex Mono 500, 13,6px, caixa alta, `letter-spacing:.08em`, cor `--mute`, nunca um h2.

### 3.3 Estrutura da home, seção a seção

**0. Barra eMAG** (36px, `--surface`). Skip links reais: "Ir para o conteúdo [1]" com `accesskey=1` apontando para `#conteudo`, "Ir para o menu [2]", "Ir para a busca [3]". À direita: A-, A, A+ (alteram `--step-0` entre 17, 19 e 21px, persistem em `localStorage`), alto contraste, botão de tema com três estados, link `/acessibilidade`. Tem que funcionar de verdade: barra decorativa é pior que nenhuma, porque o auditor testa.

**1. Faixa de identidade** (24px, `--surface-2`, Plex Mono). "INTELECTO SOLUTIONS · CNPJ 12.286.292/0001-50 · 10+ ANOS · (19) XXXXX-XXXX · SEG A SEX 9H ÀS 18H". É o banner oficial do USWDS traduzido: identidade verificável antes de qualquer promessa.

**2. Header sticky** (72px, `--bg`, hairline embaixo). Logo à esquerda; os quatro serviços visíveis em desktop, sem hambúrguer acima de 900px; telefone e WhatsApp em texto clicável; botão contornado "Documentos para licitação". `scroll-margin-top: 108px` em todo alvo de âncora.

**3. Faixa de comunicado** (56px, `--alerta-bg`, filete `--alerta-line` de 3px). "COMUNICADO 01/2026 · ATUALIZADO EM 21/08/2026" mais "O Senado encerra o E-mail Legislativo do Interlegis em maio de 2027" mais link de texto "ler a fonte oficial" saindo para o FAQ do Interlegis.

**4. Hero, duas colunas 6/6, sem foto de banco de imagens.** Esquerda: kicker mono "PORTAL, E-MAIL E LGPD PARA CÂMARAS E PREFEITURAS"; H1 em duas frases de tensão ("A sua Câmara já tem portal. O e-mail institucional dela deixa de existir em maio de 2027."); subtítulo de duas linhas nomeando público e infraestrutura própria; dois CTAs em ordem fixa, primário sólido "Consultar a situação da minha Câmara" e secundário contornado "Falar com o Luiz no WhatsApp"; linha fina em `--mute` com CNPJ, anos e composição da carteira. Direita: **moldura de produto** com borda `--line-strong`, raio 10px, barra de 34px em `--surface-2` e a URL real em Plex Mono, contendo screenshot do portal de Jaguariúna em produção. Reta, alinhada à grade, sem perspectiva, sem flutuar, sem glow. Legenda "FIG. 1 · PORTAL DA CÂMARA DE JAGUARIÚNA, EM PRODUÇÃO" com link que sai do site.

**5. Faixa de quatro números** (`--surface`, `border-y` em `--line-strong`). Prefixo pequeno em mono, número em 700 a `--step-5`, rótulo em duas linhas. "3.138 domínios .leg.br ativos, mapeados por DNS em ago/2026" · "482 câmaras que perdem o e-mail em maio de 2027" · "14 órgãos públicos atendidos em SP e MG" · "10+ anos operando infraestrutura própria no Brasil". Todo número é texto no HTML. Zero contador animado.

**6. Três portas por perfil** (tira fina de 3 âncoras). "Sou de uma Câmara Municipal" · "Sou de Prefeitura, autarquia ou consórcio" · "Sou empresa privada e preciso de DPO". Resolve o problema de três públicos numa página só sem inflar o menu.

**7. Diagnóstico do domínio** (`id=busca`, `--surface`). Campo único "Digite o nome do município", alimentado por JSON estático gerado de `radar/scan_results.csv`, carregado no primeiro keypress e não no load. Quatro vereditos escritos com igual capricho: MX Interlegis, sem e-mail configurado, outro provedor (com o gancho de SPF, DKIM e SPFBL), e não encontrado (com o gancho de intermediação de domínio junto ao Interlegis). Cada veredito traz **a data de aferição visível** e um link "esta informação está errada?". Dois botões: quente "Quero o plano de migração", frio "Baixar o alerta em PDF". Sem formulário obrigatório antes do veredito.

**8. Clientes** (grade estática; especificação completa em 3.4). Overline: "ATENDEMOS 8 CÂMARAS MUNICIPAIS, 2 PREFEITURAS, 1 CONSÓRCIO INTERMUNICIPAL, 3 AUTARQUIAS DE SANEAMENTO, 1 INSTITUTO DE PREVIDÊNCIA E 7 EMPRESAS PRIVADAS".

**9. Carteira em tabela** (`TABELA 1`). Órgão | UF | Serviços | Cliente desde | No ar. A última coluna é link externo real para o portal em produção. Nota de rodapé com os clientes privados. É o layout de um atestado de capacidade técnica e é o que o servidor copia para o processo.

**10. Os quatro serviços em bento assimétrico** (12 colunas, um bloco dominante 2x2 e três 1x1). Dominante: "E-mail institucional em domínio .leg.br". Os três menores: "Mirante, Portal da Transparência (Lei 12.527/2011, LC 131/2009, cartilha PNTP 2026)", "Conformis, LGPD e Encarregado (Lei 13.709/2018, art. 41)", "Sistemas sob medida (votação eletrônica, e-SIC, ouvidoria, Lei 13.460/2017)". Cada bloco: nome em 600 a `--step-2`, uma linha de definição, três bullets, a norma pelo número e o mesmo rótulo de link em todos.

**11. FIG. 2, diagrama de reapontamento.** SVG inline, traço 1,5px em `currentColor`, três blocos: o domínio permanece no Interlegis com NS intactos, apenas MX, SPF, DKIM e DMARC apontam para a Intelecto, Portal Modelo e SAPL seguem no ar. Abaixo, caixa âmbar com a frase sobre delegação de NS.

**12. Onde ficam os dados** (única seção invertida, fundo escuro nos dois temas). Tabela de especificação: servidor bare-metal próprio em datacenter no Brasil, Proxmox, Coolify, backup diário em object storage, SPF/DKIM/DMARC por domínio, acesso por chave SSH com fail2ban. Nenhuma logo de framework.

**13. Como contratar (Lei 14.133/2021).** Três cartões com "Indicado:" e checklist: dispensa por valor, pregão eletrônico com termo de referência, adesão a ata. CTA da seção: "Baixar o pacote de habilitação" com minuta de termo de referência, atestado, cartão CNPJ e certidões.

**14. Lógica de preço.** Escopo antes do número, sempre. "O preço é por número de contas e por haver ou não migração de caixas", mais uma âncora "a partir de", mais "proposta fechada em até 24h após o diagnóstico". Sem tabela pública.

**15. Perguntas rápidas** (duas colunas, resposta de uma linha, sem accordion). Dez itens, do "O Portal Modelo continua funcionando? Sim." ao "Dá para contratar por dispensa? Depende do valor, veja o enquadramento acima."

**16. O que você precisa saber antes de contratar** (limites, `--surface`). Ofício do Presidente e chamado no Interlegis com prazo fora do nosso controle; reapontamento não é delegação; janela de migração; o que não está incluso. Vem depois da prova, nunca antes, e é escrita como calendário e não como ressalva.

**17. Quem responde.** Foto real do Luiz, texto em primeira pessoa, telefone direto, horário e o compromisso quantificado. Nunca a frase "empresa de uma pessoa": escreve-se atendimento direto pelo responsável técnico, com a infraestrutura descrita ao lado.

**18. CTA final em pergunta.** "A sua Câmara já tem plano para maio de 2027?", com os mesmos dois botões e os mesmos rótulos do hero.

**19. Rodapé institucional.** Razão social, CNPJ, endereço, telefone, e-mail, horário; três links de governança nomeados (Acessibilidade, Política de Privacidade, Encarregado de Dados); coluna de fontes externas verificáveis (Interlegis, Lei 14.133, LGPD, cartilha PNTP); data da última atualização do site.

**Poda obrigatória no mobile.** Abaixo de 768px sobrevivem, nesta ordem: comunicado, hero (texto primeiro, moldura depois, com recorte vertical da tela e não a página inteira reduzida), quatro números em 2x2, diagnóstico, clientes em grade de 2 colunas, os quatro serviços, perguntas rápidas, quem responde, CTA, rodapé. As seções 9, 11, 12, 13 e 16 viram um bloco único "Documentação técnica e contratação" com links. Sem essa poda, a direção erra o presidente no celular.

### 3.4 Comportamento exato da faixa de logos

**Discordo do carrossel na home, e explico.** O presidente de câmara usa essa faixa para achar a cidade vizinha e ligar pedindo referência. Carrossel torna essa busca impossível: o alvo passa e some. Então:

**Home: grade estática filtrável.** Seção delimitada por `border-y` de 1px em `--line`, sem fundo colorido. Três abas em `role=tablist` ("Câmaras (8)", "Prefeituras e autarquias (6)", "Privado (7)", estado inicial "Todos"), que só alternam um atributo `data-tipo` no container. `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`, `gap: 2rem 1.5rem`. Cada célula é um `<a>` para o portal em produção, contendo três partes empilhadas:

1. brasão em caixa de altura fixa de 56px, centrado por flex, `object-fit: contain` (nunca `cover`, que corta o brasão);
2. nome em texto, 15px peso 600, e a UF em `--mute` na linha seguinte, porque brasão de cidade de 12 mil habitantes é ilegível e topônimo é reconhecível;
3. micro-resultado de uma linha em `--step--1`: "portal no ar desde 2019", "30 contas migradas sem perda", "consórcio de 12 municípios", "11 anos de infraestrutura".

Público e privado misturados na aba "Todos": o órgão prova conformidade, a farmacêutica suíça prova competência técnica.

**Páginas de serviço e rodapé: marquee canônico**, onde a faixa é sinal secundário e não ferramenta de busca.

```css
.marquee{--gap:4rem;--items:21;--seg:4s;display:flex;gap:var(--gap);overflow:hidden;
  mask-image:linear-gradient(to right,transparent,#000 8rem,#000 calc(100% - 8rem),transparent)}
.marquee__track{display:flex;gap:var(--gap);align-items:center;flex-shrink:0;min-width:100%;
  margin:0;padding:0;list-style:none;
  animation:marquee calc(var(--items) * var(--seg)) linear infinite;
  animation-play-state:var(--animps,running)}
@keyframes marquee{from{transform:translateX(0)}to{transform:translateX(calc(-100% - var(--gap)))}}
.marquee:hover .marquee__track,
.marquee:focus-within .marquee__track,
[data-motion="paused"] .marquee__track{--animps:paused}
@media (prefers-reduced-motion: reduce){
  .marquee{overflow:visible;mask-image:none}
  .marquee__track{animation:none;flex-wrap:wrap;justify-content:center}
  .marquee__track[aria-hidden="true"]{display:none}}
```

Dois `<ul>` irmãos idênticos, o segundo com `aria-hidden="true"` para o leitor de tela não ler a carteira duas vezes. O `calc(-100% - var(--gap))` é o que elimina o tranco de meia goteira por volta; `translateX(-50%)` com gap é a origem de praticamente todo marquee quebrado. Duração derivada do número de itens (21 × 4s = 84s), para a faixa não acelerar sozinha quando entrar o 22º cliente. Pausa em três gatilhos, sendo o terceiro um `<button aria-pressed>` visível: hover sozinho não cumpre o critério 2.2.2 e não serve para teclado nem toque.

**Normalização óptica por área igual** (método 3 do 9elements, força ~0,7), com o fator pré-calculado à mão no HTML: `<li class="logo" style="--w:228;--h:48;--scale:.79">`. Altura base 2,75rem (44px), calibrada pelo brasão quadrado de Jaguariúna; logotipo horizontal amplo cai para perto de 1,9rem; piso em 50% da base; trava dura `max-width:12rem`. Igualar altura para todos faria a Intelecto parecer fornecedora de farmacêutica que atende umas câmaras, quando o argumento comercial é o inverso.

**Cor:** brasão municipal fica colorido nos dois temas, sempre. É símbolo oficial e o público o lê como selo de autenticidade. Proibido `grayscale` (vira mancha cinza ilegível em detalhe heráldico) e proibido `mix-blend-mode: multiply` (apaga o logo no tema escuro). No escuro, pastilha: `background:var(--placa-logo); border-radius:.5rem; padding:.75rem 1rem`. Logotipo corporativo monocromático preto ganha `.logo--mono{filter:invert(1)}` só dentro do bloco escuro.

**Arquivos:** brasão exportado em canvas quadrado único de 400×400 PNG transparente com a mesma margem interna assada no arquivo; logotipo vetorial em SVG otimizado; nunca JPG com fundo branco. `width` e `height` intrínsecos em todo `<img>` mais `height:auto` no CSS (zera o CLS e alimenta o cálculo de área com o mesmo par de números), `decoding="async"`, `loading="lazy"` só porque a grade fica bem abaixo da dobra. Alt por extenso: `alt="Brasão da Câmara Municipal de Jaguariúna, cliente da Intelecto Solutions"`, o que torna cada nome de cidade texto indexável.

**Salvaguarda jurídica:** brasão municipal é símbolo oficial, não marca de uso livre. Enquanto não houver autorização escrita, a célula roda em modo nome em texto mais micro-resultado, sem imagem, e a grade continua funcionando.

### 3.5 As páginas de serviço

Quatro páginas (`/email-leg-br`, `/transparencia`, `/lgpd`, `/sistemas`) com **um único template de documentação**, não de landing. Coluna de conteúdo de 65ch com sumário lateral sticky de 240px (`top:108px`) e indicador de seção ativa por `IntersectionObserver` de 15 linhas; em mobile o sumário vira um `<details>` fechado. **Folha de impressão dedicada**: `@media print` esconde header, barra eMAG, sumário e CTAs, imprime a URL dos links entre parênteses e força quebra antes de cada h2. O uso real é imprimir e colar em processo administrativo.

Onze seções na mesma ordem nas quatro, para o comprador conseguir comparar e a impressão gerar um documento coerente:

1. Faixa de comunicado com a norma daquela página.
2. Hero com moldura de produto ao lado e H1 no vocabulário exato que o comprador digitou no Google.
3. O problema na voz do comprador, quatro a seis frases curtas, antes de qualquer produto.
4. Como está hoje / Como fica, em duas colunas.
5. Escopo, em lista numerada de itens contáveis, em linguagem de termo de referência.
6. Como funciona tecnicamente, com o diagrama da página legendado FIG.
7. Seis etapas numeradas, número em `--acao` a `--step-4`, título a `--step-1`, uma frase de até 15 palavras.
8. Enquadramento jurídico, com a lei citada pelo número e traduzida em cena concreta na frase seguinte.
9. Prova: clientes daquele serviço com link ao vivo para a tela em produção, mais um depoimento com nome, cargo técnico real e órgão. Aqui entra o marquee.
10. Lógica de preço e limites, coladas.
11. Como contratar mais FAQ de procurement em `<details>`, seis perguntas, e o par de CTAs com rótulo idêntico ao da home.

**O que muda em cada uma:**
- **`/email-leg-br`** é a página carro-chefe e é a direção Comunicado 2027 inteira: marcador de prazo estático gerado no build, "o que acontece se nada for feito", diagnóstico completo com os quatro vereditos, bloco prazo mais LOA, e a FIG. do reapontamento com a frase sobre delegação. É a mesma peça que serve `camara.intelecto.solutions`.
- **`/transparencia`** ganha o tour em abas do Mirante (cinco telas, URL trocando junto) e um mock do checklist PNTP com os itens em verde.
- **`/lgpd`** ganha o Ciclo Conformis em quatro fases nomeadas (Mapear, Nomear, Publicar, Monitorar) e a frase de tradução: adequação não é um PDF assinado uma vez. Nenhum valor de multa em lugar nenhum.
- **`/sistemas`** ganha três molduras menores lado a lado, três linhas de texto no total.

**Duas páginas extras obrigatórias:** `/licitacao` (CNPJ, certidões, atestado de capacidade técnica, minuta de termo de referência em .docx e .pdf, enquadramento na Lei 14.133) e `/acessibilidade` (mapa dos atalhos, declaração eMAG e WCAG 2.2 AA). Nenhum concorrente brasileiro do dossiê tem a primeira, e é onde a venda para câmara pequena costuma morrer.

**Ponte de upsell:** cada página que não é a de e-mail termina com um bloco discreto de travessia. A página de e-mail nunca menciona portal, e a proposta de e-mail nunca menciona upsell. Entrada limpa.

### 3.6 Microinterações

- Transição única no site: 140ms `ease-out`, só em `background-color`, `border-color`, `color` e `transform`.
- Hover de card e célula: `translateY(-2px)` mais borda passando de `--line` para `--acao-sutil`, tudo dentro de `@media (hover: hover)`. Sem escala, sem rotação, sem sombra colorida.
- Link de texto: sublinhado sempre visível, `text-underline-offset:3px`, espessura 1px passando a 2px no hover.
- Foco universal em uma regra só: `:focus-visible{background:var(--foco-bg);color:var(--foco-ink);box-shadow:0 -2px var(--foco-bg),0 4px var(--foco-ink);outline:none}`.
- Abas (clientes e tour do Mirante): crossfade de 120ms só em `opacity`, altura reservada por `aspect-ratio` para não empurrar a página; `role=tablist`, setas, Home e End, `aria-selected`. Implementadas como progressive enhancement: no HTML os painéis existem empilhados e visíveis, e o JS é que os colapsa.
- Diagnóstico: cartão de veredito com fade de 180ms, foco programático e `aria-live="polite"`. Estado vazio escrito por extenso, nunca spinner eterno.
- Reveal de entrada em CSS puro, em exatamente três lugares (os quatro blocos do bento, a faixa de números, os cartões de etapa): `@media (prefers-reduced-motion: no-preference)` por fora de `@supports (animation-timeline: view())` por fora da regra, `animation-range: entry 10% cover 30%`, só `opacity` e `translateY(24px)`. O estado base no CSS é o estado final, então quem não tem suporte vê a página completa. Zero AOS.js.
- Botão "Copiar" ao lado dos registros DNS do diagrama, com feedback textual por `aria-live`.
- Botão de tema com três estados cíclicos e rótulo textual visível, não só ícone.
- Bloco final obrigatório: `@media (prefers-reduced-motion: reduce){*,*::before,*::after{animation-duration:.01ms !important;transition-duration:.01ms !important;scroll-behavior:auto !important}}`.
- Proibidos: scroll-jacking, parallax, cursor customizado, texto letra a letra, contador regressivo animado, autoplay de depoimento, blob ou aurora de fundo, `backdrop-filter: blur` em card.

### 3.7 Decisões de acessibilidade

1. Barra eMAG funcional em todas as páginas, com skip links reais apontando para id existente e `accesskey` 1, 2 e 3 (Portaria nº 3/2007).
2. Alto contraste e A-/A+ persistidos em `localStorage`, alterando `--step-0` na raiz para o site inteiro crescer junto.
3. Foco visível padrão GOV.UK, pareado com hover em todo elemento interativo (SC 1.4.11 Non-text Contrast, AA).
4. `scroll-margin-top: 108px` em todo alvo de âncora, para o elemento focado por teclado não ficar escondido atrás do header sticky (SC 2.4.11 Focus Not Obscured, AA).
5. Alvos de toque com mínimo de 24×24px e 44×44px em botões de ação, itens de menu mobile, controles de aba e botão de pausa do marquee (SC 2.5.8 Target Size, AA).
6. Pausa do marquee em três gatilhos, incluindo botão real com `aria-pressed` (SC 2.2.2 Pause, Stop, Hide, A).
7. `prefers-reduced-motion: reduce` desliga o marquee e o transforma em grade centrada, e neutraliza todas as transições.
8. Todo contraste mínimo AA verificado no build: texto normal 4,5:1, texto grande 3:1, componentes de interface 3:1 (SC 1.4.3).
9. Contraste do tema escuro verificado separadamente. O `#2563EB` puro não passa sobre fundo escuro e por isso existe `--acao` em `#6FA0FF`.
10. Track duplicado do marquee com `aria-hidden="true"` para a carteira não ser lida duas vezes.
11. Alt descritivo por extenso em cada brasão e em cada screenshot, com o nome do órgão.
12. Tabelas com `<th scope>`, `<caption>` e container `overflow-x:auto`; primeira coluna sticky no mobile.
13. Abas com semântica ARIA completa e navegação por setas; painéis existem no DOM sem JS.
14. Mesmo canal de contato na mesma posição nas seis páginas (SC 3.2.6 Consistent Help, A).
15. Formulário de diagnóstico com `<label>` visível, mensagem de erro em texto e resultado anunciado por `aria-live`.
16. Nada de widget de acessibilidade carregado de CDN externo: viola a restrição de página autocontida e costuma não funcionar de verdade.
17. Declaração pública em `/acessibilidade`: eMAG 3.1 e WCAG 2.2 nível AA, com a lista de critérios atendidos. Entregar 2.2 quando o eMAG ainda aponta para 2.0 é argumento técnico verificável em proposta.

---

## 4. As oito referências que ficam abertas na mesa

1. **Fiorilli Software** · https://www.fiorilli.com.br
   Consultar para o bloco de comunicado datado e para o cartão de módulo com nome grande, uma linha de definição e "Conhecer". É a estrutura de catálogo mais legível do conjunto e a mais barata em HTML estático.

2. **Nuvem Legislativa** · https://www.nuvemlegislativa.com.br/
   Concorrente direto que já vende e-mail .leg.br com o mesmo discurso. Manter aberta para copiar a prova por link ao vivo e para conferir, seção a seção, o que eles não fazem: nenhum cliente nomeado, nenhuma menção a LGPD ou migração, venda só por revendedor. Cada ausência dessas é um bullet nosso.

3. **Interlegis** · https://www12.senado.leg.br/interlegis
   O vocabulário exato do público (Portal Modelo, SAPL, domínio .leg, reapontamento, hospedagem) e o formato de dado contável que ele já reconhece. Manter aberta para não inventar nome de coisa que já tem nome.

4. **Migadu, página Pro/Cons** · https://migadu.com/procon/
   Modelo literal da seção de limites e da medida tipográfica (coluna de 60 a 70 caracteres, H1 em navy com entrelinha 1,2, zero imagem decorativa). É o mesmo produto que estamos vendendo, feito por equipe pequena, com a estratégia de confiança invertida.

5. **GOV.UK Design System, cor e foco** · https://design-system.service.gov.uk/styles/colour/
   Fonte da regra de foco amarelo e do vocabulário de paleta por papel. Consultar sempre que aparecer um estado interativo novo.

6. **eMAG** · https://emag.governoeletronico.gov.br/
   Texto de referência da barra de acessibilidade, dos atalhos e da página `/acessibilidade`. Conferir antes de escrever a barra, não depois.

7. **Building the Perfect Logo Strip, 9elements** · https://9elements.com/blog/building-the-perfect-logo-strip/
   O cálculo de normalização por área igual. É o problema número um da faixa de brasões e não é teórico: sem ele a grade conta a história comercial errada.

8. **The Infinite Marquee, Ryan Mulligan** · https://ryanmulligan.dev/blog/css-marquee/
   A matemática do loop sem emenda com dois tracks. Manter aberta enquanto o marquee das páginas de serviço estiver sendo escrito, porque o erro do `-50%` é fácil de cometer e difícil de diagnosticar depois.

---

## 5. Três coisas que o site não deve fazer

**1. Não pode virar campanha de prazo.**
Maio de 2027 é faixa de comunicado, página de serviço e landing de prospecção. Não é a espinha do site institucional. Motivo: 85% dos domínios .leg.br que mapeamos não têm esse problema, e os 1.250 sem e-mail nenhum são o maior bolsão de leads e o caso que gerou o cliente Luz/MG. Fora isso, o site precisa vender portal, LGPD, sistemas e DPO para empresa privada, e uma home monotemática deixa três dos quatro serviços em caixinhas. E há a data de validade: em junho de 2027 o site inteiro estaria com cara de campanha vencida, ou pior, de desinformação se o Senado prorrogar.

**2. Não pode publicar o mapa de mercado por UF.**
A tabela de quantas câmaras de MG, PR e SP estão com MX Interlegis é o único ativo proprietário que a Intelecto tem, e publicá-la entrega prospecção pronta para a Instar, que tem 28 pessoas para executar e a Intelecto tem uma. O que vai ao ar é o total nacional (que sustenta a autoridade) e o veredito por município consultado (que gera o lead). O corte por estado fica no repositório.

**3. Não pode publicar nada que não sobreviva a uma conferência.**
Nada de contador animado (o Legiflow renderiza "0+" e a DPO Expert também, porque o script não dispara). Nada de número redondo sem fonte e data. Nada de brasão sem autorização escrita da câmara, porque brasão é símbolo oficial do município e não marca de uso livre. Nada de "conformidade garantida" ou promessa de ausência de multa, que cria passivo jurídico real para uma operação deste porte. E nunca a frase "empresa de uma pessoa" escrita no site, que num edital com exigência de equipe técnica vira prova contra nós; o que se escreve é atendimento direto pelo responsável técnico, com a infraestrutura própria descrita ao lado. Motivo geral: o comprador confere e o concorrente compara. A Instar publica 9 estados num domínio e 17 no outro, e quem abre as duas abas desmonta a credibilidade dela em dez segundos. A nossa defesa inteira é ser a empresa em que isso não acontece.

---

### Pré-requisitos antes de escrever a primeira linha de HTML

- Auditar em tenant real as cinco telas do Mirante que vão para a vitrine. Screenshot com tabela estourando ou estado vazio feio vira prova contra, e nesse caso a tela sai em vez de entrar melhorada no Figma.
- Nenhum dado pessoal, nome de servidor, e-mail ou protocolo visível em captura. Painel administrativo só com dados fictícios.
- Colher autorização escrita de citação como referência e de uso de brasão, órgão por órgão.
- Gerar e datar o JSON do diagnóstico a partir de `radar/scan_results.csv`, com rotina definida de reexecução do `scan_dns.py` por lote de UF. Radar desatualizado errando sobre a câmara de quem está lendo custa a reunião inteira.
- Montar o pacote de habilitação em PDF antes de publicar o botão que promete o download.
- Confirmar com o Luiz a âncora de preço a publicar, que hoje contraria a decisão de 20/08 de precificar caso a caso.