FROM node:16-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

RUN npx eslint --init

COPY . .

EXPOSE 3000

ENV CHOKIDAR_USEPOLLING=true

CMD ["yarn","start"]