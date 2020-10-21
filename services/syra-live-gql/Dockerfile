FROM node:current-alpine3.12 as development

ARG IMAGE_NAME=syra-live-gql

WORKDIR /$IMAGE_NAME

COPY . .

RUN yarn install
RUN yarn run prisma:generate
RUN yarn run build

CMD ["yarn", "start:dev"]