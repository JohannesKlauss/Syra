FROM node:latest

ARG IMAGE_NAME=syra-daw-fe

# set working directory
WORKDIR /$IMAGE_NAME

# add `/app/node_modules/.bin` to $PATH
ENV PATH /$IMAGE_NAME/node_modules/.bin:$PATH

# add app
COPY . .
COPY ../../yarn.lock .
COPY ../../node_modules .
RUN yarn install

# start app
CMD ["yarn", "start"]