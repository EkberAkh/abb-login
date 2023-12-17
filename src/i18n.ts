import {getRequestConfig} from 'next-intl/server';


export const defaultLocale = 'az';
export const locales = [defaultLocale, 'en', 'ru'];

export default getRequestConfig(async ({locale}) => {
  const common = (await import(`../locales/${locale}/common.json`)).default
  const onboarding = (await import(`../locales/${locale}/onboarding.json`)).default
  return ({
  messages: {common, onboarding}
})});