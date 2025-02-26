import { Slot } from '@radix-ui/react-slot'
import type React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export const buttonStyle = tv({
  base: [
    'inline-flex items-center justify-center',
    'gap-2',
    'rounded-lg drop-shadow',
    'transition-colors',
    'cursor-pointer',
    'outline-none ring-foreground/30 ring-offset-2 ring-offset-black focus-visible:text-foreground focus-visible:ring-2',
    '[&_svg]:w-4 [&_svg]:h-4 [&_svg]:pointer-events-none [&_svg]:shrink-0 ',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
    variant: {
      solid:
        'text-muted-foreground font-medium hover:text-foreground bg-foreground/5 hover:bg-foreground/10',
      primary: 'bg-blue-500 text-white hover:bg-blue-400 ring-blue-500/50',
      outline: 'border border-foreground/10 hover:bg-foreground/5',
      ghost: 'hover:bg-foreground/5',
    },
    size: {
      xs: 'h-8 px-3 text-sm',
      sm: 'h-9 px-3',
      md: 'h-10 px-4 py-2',
      lg: 'h-12 px-8',
      icon: 'h-10 w-10',
    },
  },
  defaultVariants: {
    variant: 'solid',
    size: 'md',
  },
})

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyle> {
  /**
   * If true, the button will be rendered as a child of a link
   */
  asChild?: boolean
}

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    variant,
    size,
    asChild,
    className,
    children,
    ...rest
  } = props

  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      type={type}
      className={buttonStyle({ variant, size, className })}
      {...rest}
    >
      {children}
    </Comp>
  )
}
