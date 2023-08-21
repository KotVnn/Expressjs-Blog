FROM --platform=linux/amd64 node:14.15-alpine

RUN apk add --update --no-cache
WORKDIR /source

ENTRYPOINT './start.sh'
