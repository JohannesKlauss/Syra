FROM node:latest as development

ARG IMAGE_NAME=syra-api-gateway

WORKDIR /$IMAGE_NAME

COPY . .
COPY ../../yarn.lock .
COPY ../../node_modules .

RUN yarn install
RUN yarn run build

CMD ["yarn", "start:dev"]