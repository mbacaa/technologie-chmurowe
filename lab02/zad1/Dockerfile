FROM node:12

WORKDIR /app

COPY package.json .
COPY index.js .

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]