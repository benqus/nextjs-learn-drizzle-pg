FROM node:lts-alpine

VOLUME /app

WORKDIR /app

COPY . /app

RUN npm install

ENTRYPOINT [ "./docker-entrypoint.sh" ]
