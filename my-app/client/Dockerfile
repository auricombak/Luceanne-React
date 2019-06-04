FROM node:8.7.0-alpine

RUN mkdir -p /srv/app/luceanne-client
WORKDIR /srv/app/luceanne-client

COPY package.json /srv/app/luceanne-client


RUN npm build
RUN npm install -g serve

COPY . /srv/app/luceanne-client

CMD ["serve", "-s", "build", "-l", "80"]