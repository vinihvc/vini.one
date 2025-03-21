'use client'

import { Button } from '@/components/ui/button'
import { Link, usePathname } from '@/i18n/navigation'
import { cn } from '@/lib/cn'
import { Flags } from '@/lib/flags'
import { Languages } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import type React from 'react'

const LOCALES_MAP = {
  pt: 'br',
  en: 'eua',
}

interface SwitchLanguageProps extends React.ComponentProps<typeof Button> {}

export const SwitchLanguage = (props: SwitchLanguageProps) => {
  const { className, ...rest } = props

  const t = useTranslations('components.header.language')

  const locale = useLocale()
  const pathname = usePathname()

  const nextLocale = locale === 'pt' ? 'en' : 'pt'

  const formattedLocale = LOCALES_MAP[locale as keyof typeof LOCALES_MAP]

  const Flag = Flags[formattedLocale as keyof typeof Flags]

  return (
    <Button
      className={cn('relative [&>.flag]:h-3 [&>.flag]:w-3', className)}
      variant="ghost"
      size="icon"
      asChild
      {...rest}
    >
      <Link href={pathname} locale={nextLocale}>
        <Languages />

        <span className="sr-only">
          {t('cta', {
            language: locale === 'pt' ? t('en') : t('pt'),
          })}
        </span>

        <Flag className="fade-in-0 zoom-in-0 absolute top-1 right-1 animate-in rounded-full duration-300" />
      </Link>
    </Button>
  )
}
