FROM node:10

COPY ./ /app

EXPOSE 3000

ENV USUARIO forum-alura

ENV SENHA minhasenha

CMD ["node", "/app/api/index.js"]