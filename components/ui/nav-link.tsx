'use client'

import { cn } from '@/lib/cn'
import NextLink, { type LinkProps as NextLinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export const linkVariants = tv({
  base: [
    'transition',
    'outline-none ring-offset-2 ring-offset-background focus-visible:ring-2',
  ],
})

interface NavLinkProps
  extends VariantProps<typeof linkVariants>,
    NextLinkProps,
    React.HTMLAttributes<HTMLAnchorElement> {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean
}

export const NavLink = React.forwardRef<HTMLAnchorElement, NavLinkProps>(
  (props, ref) => {
    const { href, isExternal, className, children, ...rest } = props

    const pathname = usePathname()

    const isCurrent = href === pathname

    return (
      <NextLink
        ref={ref}
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
  },
)

NavLink.displayName = 'NavLink'
