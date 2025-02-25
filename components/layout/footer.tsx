import { cn } from '@/lib/cn'
import type React from 'react'

import { SEO } from '@/config/seo'
import { TRAVElING_COUNTRIES } from '@/content/traveling'

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

const getData = async () => {
  return { about: SEO }
}

export const Footer = async (props: FooterProps) => {
  const { className, ...rest } = props

  const { about } = await getData()

  const livingCountry = TRAVElING_COUNTRIES.at(0)

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

              <livingCountry.flag />
            </div>
          )}
        </div>

        <span className="text-sm">
          &copy;{` ${new Date().getFullYear()} ${about.title}`}
        </span>
      </div>
    </footer>
  )
}
