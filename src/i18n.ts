import {getRequestConfig} from 'next-intl/server';


export const defaultLocale = 'az';
export const locales = [defaultLocale, 'en', 'ru'];

export default getRequestConfig(async ({locale}) => {
  const common = (await import(`../locales/${locale}/common.json`)).default
  const oboarding = (await import(`../locales/${locale}/oboarding.json`)).default
  return ({
  messages: {common, oboarding}
})});