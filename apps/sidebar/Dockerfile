FROM node:8.1.4-alpine

COPY package.json .
# COPY package-lock.json .

RUN npm i -s --no-progress && \
    mkdir /app && \
    cp -R ./node_modules ./app

WORKDIR /app

COPY . .

CMD ["node", "server.js"]