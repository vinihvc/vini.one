import { cn } from '@/lib/cn'
import React from 'react'

import { SEO } from '@/config/seo'
import { TRAVElING_COUNTRIES } from '@/config/traveling'

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
          <span className="relative top-[1px] flex size-2">
            <span className="absolute size-full animate-ping rounded-full bg-green-500 opacity-75" />
            <span className="relative size-2 rounded-full bg-green-500" />
          </span>

          {livingCountry && (
            <div className="flex gap-2">
              <span className="text-xs">Traveling in</span>

              {React.createElement(livingCountry.flag)}
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
