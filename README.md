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
