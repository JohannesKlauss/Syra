FROM node:15.8.0-buster as production

ARG IMAGE_NAME=syra-live-gql

WORKDIR /$IMAGE_NAME

# Adding ffmpeg, since we need this for audio file conversion on the server side.
# RUN apk add --no-cache ffmpeg

ENV NODE_ENV production

COPY package.json .

RUN yarn install --ignore-engines
RUN yarn add global pm2 @nestjs/cli --ignore-engines

COPY . .

ENV PATH /$IMAGE_NAME/node_modules/.bin:$PATH

RUN yarn run docker:build

CMD [ "pm2-runtime", "start", "dist/src/main.js" ]