FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/luceanne-client
WORKDIR /srv/app/luceanne-client

COPY package.json /srv/app/luceanne-client
RUN npm install

COPY . /srv/app/luceanne-client

RUN npm run build
RUN npm install -g serve



CMD ["serve", "-s", "build"]