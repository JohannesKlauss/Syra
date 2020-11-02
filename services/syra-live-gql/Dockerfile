FROM node:15.0.1-buster as development

ARG IMAGE_NAME=syra-live-gql

WORKDIR /$IMAGE_NAME

COPY . .

RUN yarn install --ignore-engines
RUN yarn run docker:build

CMD ["yarn", "start:dev"]

FROM node:15.0.1-buster as production

ARG IMAGE_NAME=syra-live-gql

WORKDIR /$IMAGE_NAME

COPY . .

RUN yarn install --ignore-engines
RUN yarn run docker:build

CMD ["yarn", "start:prod"]