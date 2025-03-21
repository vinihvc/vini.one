'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { Flags } from '@/lib/flags'
import { Languages } from 'lucide-react'
import { type Locale, useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import type React from 'react'

const LOCALES_MAP = {
  pt: 'br',
  en: 'eua',
}

interface SwitchLanguageProps extends React.ComponentProps<typeof Button> {}

export const SwitchLanguage = (props: SwitchLanguageProps) => {
  const { className, ...rest } = props

  const t = useTranslations('components.header.language')

  const pathname = usePathname()
  const router = useRouter()
  const locale = pathname.split('/')[1] as Locale
  const newLocale = locale === 'pt' ? 'en' : 'pt'
  const newPath = pathname.replace(locale, newLocale)

  const formattedLocale = LOCALES_MAP[locale as keyof typeof LOCALES_MAP]
  const Flag = Flags[formattedLocale as keyof typeof Flags]

  const handleSwitchLanguage = () => {
    router.push(newPath)

    router.refresh()
  }

  return (
    <Button
      className={cn('relative [&>.flag]:h-3 [&>.flag]:w-3', className)}
      variant="ghost"
      size="icon"
      onClick={handleSwitchLanguage}
      {...rest}
    >
      <Languages />

      <span className="sr-only">
        {t('cta', {
          language: locale === 'pt' ? t('en') : t('pt'),
        })}
      </span>

      <Flag className="fade-in-0 zoom-in-0 absolute top-1 right-1 animate-in rounded-full duration-300" />
    </Button>
  )
}
