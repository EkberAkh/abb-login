import { Config } from 'next-i18n-router/dist/types';

const i18nConfig: Config = {
    locales: ['az', 'en', 'ru'],
    defaultLocale: 'az',
    basePath: '/login'
  };

  // https://locize.com/blog/next-app-dir-i18n/

  export default i18nConfig;
