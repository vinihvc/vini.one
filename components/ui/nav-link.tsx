'use client'

import { Link } from '@/i18n/navigation'
import { cn } from '@/lib/cn'
import { usePathname } from 'next/navigation'
import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export const linkVariants = tv({
  base: [
    'group',
    'transition',
    'outline-0 ring-offset-2 ring-offset-background focus-visible:ring-2',
  ],
})

interface NavLinkProps
  extends VariantProps<typeof linkVariants>,
    React.ComponentProps<typeof Link>,
    Omit<React.ComponentProps<'a'>, 'href'> {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
  /**
   * If `true`, only exact path matches will be considered active
   * @default false
   */
  exact?: boolean
}

export const NavLink = (props: NavLinkProps) => {
  const {
    href,
    isExternal,
    className,
    children,
    exact = false,
    ...rest
  } = props

  const pathname = usePathname()
  const pathnameWithoutLocale = React.useMemo(() => {
    // Remove locale prefix more efficiently with a single replace
    const newPathname = pathname.replace(/^\/(en|pt)/, '')

    // Return root path if empty after locale removal
    return newPathname || '/'
  }, [pathname])

  const isCurrent = exact
    ? href === pathnameWithoutLocale
    : pathnameWithoutLocale.startsWith(href.toString())

  return (
    <Link
      className={cn(linkVariants({ className }), {
        active: isCurrent,
      })}
      href={href}
      aria-current={isCurrent ? 'page' : undefined}
      prefetch
      {...rest}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
        prefetch: false,
      })}
    >
      {children}
    </Link>
  )
}
