FROM node:15.8.0-alpine3.10 as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_LIVE_GQL_URL https://api.syra.live
ENV REACT_APP_LIVE_GQL_URL_WS wss://api.syra.live
ENV REACT_APP_LIVE_URL=https://syra.live

# add app
COPY package.json .
RUN yarn install --ignore-engines
RUN yarn global add react-scripts@4.0.2 typescript@4.1.3

COPY . .

# start app
RUN yarn run build

FROM nginx:1.19 as production

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]