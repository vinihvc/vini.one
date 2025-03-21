import type en from '@/i18n/messages/en.json'
import type { formats } from '@/i18n/request'
import type { routing } from '@/i18n/routing'

declare module 'next-intl' {
  interface AppConfig {
    Messages: typeof en
    Formats: typeof formats
    Locale: (typeof routing.locales)[number]
  }
}
