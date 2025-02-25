import React from 'react'
import { cn } from '@/lib/cn'

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  (props, ref) => {
    const { className, ...rest } = props

    return (
      <span
        ref={ref}
        role="img"
        className={cn(
          'flex size-10 items-center justify-center font-bold text-2xl',
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
