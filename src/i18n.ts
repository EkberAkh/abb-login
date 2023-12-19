import {getRequestConfig} from 'next-intl/server';


export const defaultLocale = 'az';
export const locales = [defaultLocale, 'en', 'ru'];

export default getRequestConfig(async ({locale}) => {
  const common = (await import(`../locales/${locale}/common.json`)).default
  const login = (await import(`../locales/${locale}/login.json`)).default
  return ({
  messages: {common, login}
})});