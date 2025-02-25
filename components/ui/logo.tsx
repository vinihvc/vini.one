import { cn } from '@/lib/cn'
import React from 'react'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <span
        ref={ref}
        role="img"
        className={cn(
          'flex h-10 w-10 items-center justify-center font-bold text-2xl',
          className,
        )}
        {...rest}
      >
        V
      </span>
    )
  },
)

Logo.displayName = 'Logo'
