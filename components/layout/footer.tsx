import { cn } from '@/lib/cn'
import { getTravel } from '@/services/requests'
import type React from 'react'
import { FlagIcon } from '../ui/flag-icon'

import { SEO } from '@/config/seo'

interface FooterProps extends React.ComponentProps<'footer'> {}

export const Footer = async (props: FooterProps) => {
  const { className, ...rest } = props

  const travel = await getTravel()

  const livingCountry = travel.at(0)

  return (
    <footer className={cn('py-10 selection:bg-green-500', className)} {...rest}>
      <div className="container flex items-center justify-between text-muted-foreground">
        <div className="flex items-center space-x-2">
          <span className="relative top-[1px] flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative h-2 w-2 rounded-full bg-green-500" />
          </span>

          {livingCountry && (
            <div className="flex items-center gap-2">
              <span className="text-xs">Chilling in</span>

              <FlagIcon country={livingCountry.countryCode} />
            </div>
          )}
        </div>

        <span className="text-sm">
          &copy;{` ${new Date().getFullYear()} ${SEO.title}`}
        </span>
      </div>
    </footer>
  )
}
