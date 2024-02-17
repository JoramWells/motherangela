FROM node:16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 5012

CMD [ "yarn", "start"]