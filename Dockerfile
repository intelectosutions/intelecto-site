FROM node:20-alpine

WORKDIR /app
COPY server.js ./
COPY public/ ./public/
COPY src/painel_dados.json ./painel_dados.json

ENV PORT=80
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/health >/dev/null 2>&1 || exit 1

CMD ["node", "server.js"]
