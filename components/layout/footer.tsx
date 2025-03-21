import { SITE_CONFIG } from '@/config/site'
import { TRAVEL } from '@/content/travel'
import { cn } from '@/lib/cn'
import { Flags } from '@/lib/flags'
import { getTranslations } from 'next-intl/server'
import type React from 'react'

interface FooterProps extends React.ComponentProps<'footer'> {}

const Footer = async (props: FooterProps) => {
  const { className, ...rest } = props

  const t = await getTranslations('components.footer')

  const travelingCountry = TRAVEL.at(0)

  const Flag = Flags[travelingCountry?.countryCode ?? 'br']

  return (
    <footer className={cn('py-10 selection:bg-green-500', className)} {...rest}>
      <div className="container flex items-center justify-between text-muted-foreground">
        {travelingCountry ? (
          <div className="flex items-center space-x-2">
            <span className="relative top-[1px] flex h-2 w-2">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-green-500" />
            </span>

            <div className="flex items-center gap-2">
              <span className="text-xs">{t('chilling')}</span>

              <Flag />
            </div>
          </div>
        ) : (
          <div className="grow" />
        )}

        <span className="text-sm">
          &copy;{` ${new Date().getFullYear()} ${SITE_CONFIG.name}`}
        </span>
      </div>
    </footer>
  )
}

export default Footer
