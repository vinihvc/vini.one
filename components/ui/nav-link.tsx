'use client'

import { cn } from '@/lib/cn'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import type React from 'react'
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
    NextLinkProps,
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

  const isCurrent = exact
    ? href === pathname
    : pathname.startsWith(href.toString())

  return (
    <NextLink
      className={cn(linkVariants({ className }), {
        active: isCurrent,
      })}
      href={href}
      aria-current={isCurrent ? 'page' : undefined}
      {...rest}
      {...(isExternal && {
        target: '_blank',
        rel: 'noopener noreferrer',
        prefetch: false,
      })}
    >
      {children}
    </NextLink>
  )
}
