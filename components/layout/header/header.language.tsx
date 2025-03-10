'use client'

import { Button } from '@/components/ui/button'
import { Link, usePathname } from '@/i18n/navigation'
import { Flags } from '@/lib/flags'
import { Languages } from 'lucide-react'
import { useLocale } from 'next-intl'

const LOCALES_MAP = {
  pt: 'br',
  en: 'eua',
}

export const HeaderLanguage = () => {
  const locale = useLocale()
  const pathname = usePathname()

  const formattedLocale = LOCALES_MAP[locale as keyof typeof LOCALES_MAP]

  const Flag = Flags[formattedLocale as keyof typeof Flags]

  const newLocale = locale === 'pt' ? 'en' : 'pt'

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" asChild>
        <Link href={pathname} locale={newLocale}>
          <Languages />

          <span className="sr-only">
            {`Switch to ${locale === 'pt' ? 'English' : 'Português'}`}
          </span>
        </Link>
      </Button>

      <Flag className="fade-in-0 zoom-in-0 absolute top-1 right-1 h-3 w-3 animate-in rounded-full duration-300" />
    </div>
  )
}
