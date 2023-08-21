FROM node:16.20-alpine

RUN apk add --update --no-cache
WORKDIR /source

ENTRYPOINT './start.sh'
