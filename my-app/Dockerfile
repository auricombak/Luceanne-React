FROM node:9.4

# Into which the source will be copied inside the destination container.

WORKDIR /app

# It will copy the existing files to the `/app` directory.
COPY . /app

RUN npm run client-install

RUN npm install


CMD ["npm", "run", "dev"]
