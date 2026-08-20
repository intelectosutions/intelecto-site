#!/usr/bin/env python3
"""
Build do site — injeta o logo em base64 nos templates de src/ e grava as
páginas prontas em public/, que é o diretório servido pelo nginx no Coolify.

USO:  python3 build.py
"""
import base64, os, re

HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, "src")
PUBLIC = os.path.join(HERE, "public")
LOGO = os.path.join(SRC, "logo_intelecto.jpg")

# template → caminho de saída dentro de public/
PAGINAS = {
    "camaras.template.html": "index.html",
    "painel.template.html": "painel/index.html",   # area restrita (Basic Auth no server.js)
}

CABECA = """<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta property="og:title" content="O e-mail da sua Câmara tem prazo para acabar">
<meta property="og:description" content="O E-mail Legislativo do Interlegis será desativado em maio de 2027. Veja o que fazer para migrar sem perder o Portal Modelo nem o SAPL.">
<meta property="og:type" content="website">
<meta property="og:locale" content="pt_BR">
"""


def montar(html):
    """Move <title>/<meta>/<link>/<style> do corpo do template para o <head>."""
    head_tags, body = [], html
    for padrao in (r"<title>.*?</title>", r"<meta [^>]*>", r"<link [^>]*>", r"<style>.*?</style>"):
        for m in re.findall(padrao, body, flags=re.S):
            head_tags.append(m)
            body = body.replace(m, "", 1)
    return CABECA + "\n".join(head_tags) + "\n</head>\n<body>\n" + body.strip() + "\n</body>\n</html>\n"


def main():
    logo_b64 = base64.b64encode(open(LOGO, "rb").read()).decode()
    os.makedirs(PUBLIC, exist_ok=True)
    for template, saida in PAGINAS.items():
        html = open(os.path.join(SRC, template), encoding="utf-8").read()
        html = html.replace("__LOGO_B64__", logo_b64)
        destino = os.path.join(PUBLIC, saida)
        os.makedirs(os.path.dirname(destino), exist_ok=True)
        open(destino, "w", encoding="utf-8").write(montar(html))
        print(f"OK  {saida}  ({os.path.getsize(destino)/1024:.0f} KB)")


if __name__ == "__main__":
    main()
