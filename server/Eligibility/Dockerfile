FROM node:16-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 5008

CMD [ "yarn", "start"]