FROM node:23-alpine3.19 AS build

WORKDIR /app

COPY package.json ./

RUN npm install 

EXPOSE 3000

COPY . .

CMD ["npm", "start"]