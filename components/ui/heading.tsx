import { cn } from '@/lib/cn'
import { Slot } from '@radix-ui/react-slot'
import type React from 'react'

interface HeadingProps extends React.ComponentProps<'h1'> {
  /**
   * If true, the Heading will be rendered as a child of another component
   *
   * @default false
   */
  asChild?: boolean
}

export const Heading = (props: HeadingProps) => {
  const { asChild, className, ...rest } = props

  const Comp = asChild ? Slot : 'h1'

  return (
    <Comp
      className={cn(
        'inline-block bg-gradient-to-r bg-clip-text font-bold text-5xl text-transparent leading-tight',
        className,
      )}
      {...rest}
    />
  )
}
