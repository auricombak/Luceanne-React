FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/luceanne-client
WORKDIR /srv/app/luceanne-client

COPY package.json /srv/app/luceanne-client


RUN npm install

COPY . /srv/app/luceanne-client

CMD ["npm", "run", "start"]