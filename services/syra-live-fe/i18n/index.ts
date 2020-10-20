import NextI18Next from 'next-i18next';
import * as path from 'path';

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['de'],
  fallbackLng: 'en',
  fallbackNS: 'default',
  defaultNS: 'default',
  localePath: path.resolve('./public/static/locales')
});

export default NextI18NextInstance;

export const {appWithTranslation, Link, Trans, Router, config, withTranslation, i18n} = NextI18NextInstance;