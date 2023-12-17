import { useTranslations } from 'next-intl'
import { NextRequest } from 'next/server'
import { defaultLocale } from './i18n'

const resolveLocale = (req: NextRequest) => {
  const pathname = req.nextUrl.pathname
  const [, locale] = pathname.split('/')

  if (!locale.includes(locale)) {
    return defaultLocale
  }

  return locale || defaultLocale
}

export { resolveLocale, useTranslations }
