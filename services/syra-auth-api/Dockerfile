FROM node:latest as development

ARG IMAGE_NAME=syra-auth-api

WORKDIR /$IMAGE_NAME

COPY . .

RUN yarn install
RUN yarn run build

CMD ["yarn", "start:dev"]