ARG IMAGE_NAME=syra-daw-fe

FROM node:15.0.1-alpine3.10 as development

ARG IMAGE_NAME=syra-daw-fe

# set working directory
WORKDIR /$IMAGE_NAME

# add `/app/node_modules/.bin` to $PATH
ENV PATH /$IMAGE_NAME/node_modules/.bin:$PATH

# add app
COPY . .
RUN yarn install

# start app
CMD ["yarn", "start"]

FROM node:15.0.1-alpine3.10 as production

# set working directory
WORKDIR /$IMAGE_NAME

# add `/app/node_modules/.bin` to $PATH
ENV PATH /$IMAGE_NAME/node_modules/.bin:$PATH

# add app
COPY . .
RUN yarn install

# start app
CMD ["yarn", "build"]