ARG IMAGE_NAME=syra-live-fe

# base image
FROM node:14.16.1-alpine3.13 as production

# set working directory
WORKDIR /$IMAGE_NAME

# add `/app/node_modules/.bin` to $PATH

ENV NODE_ENV production
ENV NEXT_PUBLIC_LIVE_GQL_URL https://api.syra.live
ENV NEXT_PUBLIC_DAW_URL https://daw.syra.live

# add app
COPY /package.json .

# Ignore engines because of weird yarn bug when installing @apollo/client
RUN yarn install --ignore-engines
RUN yarn add global pm2 typescript @types/node

COPY . .

ENV PATH /$IMAGE_NAME/node_modules/.bin:$PATH

RUN yarn run build

# start app
EXPOSE 3000
USER node
CMD [ "pm2-runtime", "start", "npm", "--", "start" ]