import { cn } from '@/lib/cn'
import type React from 'react'

interface LogoProps extends React.ComponentProps<'span'> {}

export const Logo = (props: LogoProps) => {
  const { className, ...rest } = props

  return (
    <span
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
}
