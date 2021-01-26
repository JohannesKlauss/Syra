const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config;
  },
  rewrites: async () => nextI18NextRewrites(localeSubpaths),
  publicRuntimeConfig: {
    localeSubpaths,
    NEXT_PUBLIC_LIVE_GQL_URL: process.env.NEXT_PUBLIC_LIVE_GQL_URL,
    NEXT_PUBLIC_STREAM_CHAT_KEY: process.env.NEXT_PUBLIC_STREAM_CHAT_KEY,
    NEXT_PUBLIC_DAW_URL: process.env.NEXT_PUBLIC_DAW_URL,
  },
}