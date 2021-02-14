const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    }

    return config;
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_LIVE_GQL_URL: process.env.NEXT_PUBLIC_LIVE_GQL_URL,
    NEXT_PUBLIC_STREAM_CHAT_KEY: process.env.NEXT_PUBLIC_STREAM_CHAT_KEY,
    NEXT_PUBLIC_DAW_URL: process.env.NEXT_PUBLIC_DAW_URL,
  },
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localeDetection: false,
  },
});