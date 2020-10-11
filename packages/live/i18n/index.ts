import NextI18Next from 'next-i18next';
const { localeSubpaths } = require('next/config').default().publicRuntimeConfig
const path = require('path')

const { appWithTranslation, useTranslation } = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  fallbackLng: 'en',
  fallbackNS: 'default',
  localeSubpaths,
  defaultNS: 'default',
  localePath: path.resolve('./i18n/locales')
});

export {
  appWithTranslation,
  useTranslation,
}