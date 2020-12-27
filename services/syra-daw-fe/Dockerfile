FROM node:15.5.0-alpine3.10 as production

# set working directory
WORKDIR /$IMAGE_NAME

# add `/app/node_modules/.bin` to $PATH
ENV PATH /$IMAGE_NAME/node_modules/.bin:$PATH

# add app
COPY package.json .
RUN yarn install --ignore-engines

COPY . .

# start app
CMD ["yarn", "build"]