ARG IMAGE_NAME=syra-live-fe

# base image
FROM node:15.0.1-alpine3.12 as development

# set working directory
WORKDIR /$IMAGE_NAME

# add `/app/node_modules/.bin` to $PATH
ENV PATH /$IMAGE_NAME/node_modules/.bin:$PATH

# add app
COPY package.json .

# Ignore engines because of weird yarn bug when installing @apollo/client
RUN yarn install --ignore-engines
RUN yarn run build

# start app
CMD ["yarn", "dev"]

# base image
FROM nginx:latest as production

# set working directory
WORKDIR /$IMAGE_NAME

# add `/app/node_modules/.bin` to $PATH
ENV PATH /$IMAGE_NAME/node_modules/.bin:$PATH

COPY --from=development /app/build/ /usr/share/nginx/html

# add app
COPY package.json .

# Ignore engines because of weird yarn bug when installing @apollo/client
RUN yarn install --ignore-engines

# start app
CMD ["yarn", "build"]