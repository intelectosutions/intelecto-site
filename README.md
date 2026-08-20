# Intelecto Site

Páginas públicas da Intelecto Solutions, servidas por nginx em container e
publicadas pelo Coolify (projeto **Intelecto Site**, servidor Eveo).

## Páginas

| Página | Domínio | Origem |
|---|---|---|
| Prazo do E-mail Interlegis (captação de câmaras) | `camaras.intelecto.solutions` | `src/camaras.template.html` |

## Como editar

O conteúdo fica nos templates em `src/`. O logo é injetado em base64 pelo build,
para a página continuar sendo um arquivo único, sem dependência externa.

```bash
python3 build.py     # src/*.template.html → public/
```

Depois é só commitar `public/` junto com a alteração do template — o Coolify
constrói a imagem a partir do `Dockerfile`, que copia `public/` para o nginx.

## Deploy

Push na branch `main` dispara o deploy automático no Coolify. Para forçar
manualmente, use o botão *Redeploy* na aplicação.

## Estrutura

```
src/            templates editáveis + logo
public/         páginas geradas (commitadas — é o que o container serve)
build.py        injeta o logo e monta o HTML final
Dockerfile      nginx:alpine servindo public/
nginx.conf      cabeçalhos, gzip, cache e /health
```

## Infraestrutura — como o domínio chega até aqui

O host Eveo (177.104.128.31) **não** encaminha as portas 80/443 para a VM do
Coolify: ele roda um **nginx próprio** que faz proxy reverso por domínio, e o
**certbot do host** é quem emite os certificados. O Traefik do Coolify só recebe
o tráfego já proxiado e roteia pelo cabeçalho `Host`.

Consequência prática: **publicar um domínio novo exige criar o vhost no host**,
senão o domínio responde 404 e o Let's Encrypt não valida o desafio.

Passo a passo (feito para `camaras.intelecto.solutions` em 20/08/2026):

```bash
# 1. registro A do subdomínio → 177.104.128.31 (Google Cloud DNS)
# 2. no host (ssh eveo), vhost só com a porta 80 (desafio ACME + redirect)
#    modelo: /etc/nginx/sites-available/mirante.conf
# 3. emitir o certificado
certbot certonly --webroot -w /var/www/html -d camaras.intelecto.solutions \
  --non-interactive --agree-tos -m contato@intelecto.solutions
# 4. acrescentar o bloco 443 com proxy_pass http://10.0.0.10:80
nginx -t && systemctl reload nginx
```

O vhost desta página vive em `/etc/nginx/sites-available/camaras.conf` (link em
`sites-enabled/`). Renovação do certificado: automática, pelo timer do certbot.
