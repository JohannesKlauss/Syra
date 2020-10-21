# base image
FROM node:current-alpine3.12

ARG IMAGE_NAME=syra-admin-fe

# set working directory
WORKDIR /$IMAGE_NAME

# add `/app/node_modules/.bin` to $PATH
ENV PATH /$IMAGE_NAME/node_modules/.bin:$PATH

# add app
COPY package.json .

# Ignore engines because of weird yarn bug when installing @apollo/client
RUN yarn install --ignore-engines

# start app
CMD ["yarn", "dev"]