FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/luceanne-server
WORKDIR /srv/app/luceanne-server

COPY package.json /srv/app/luceanne-server
COPY package-lock.json /srv/app/luceanne-server


RUN npm install

COPY . /srv/app/luceanne-server

CMD ["npm", "run", "start"]