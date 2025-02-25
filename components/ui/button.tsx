import { Slot } from '@radix-ui/react-slot'
import React from 'react'
import { type VariantProps, tv } from 'tailwind-variants'

export const buttonStyle = tv({
  base: [
    'inline-flex items-center justify-center',
    'text-muted-foreground font-medium hover:text-white',
    'gap-2',
    'rounded-lg drop-shadow',
    'transition-colors',
    'outline-none ring-white/30 ring-offset-2 ring-offset-black focus-visible:text-white focus-visible:ring-2',
    '[&_svg]:w-5 [&_svg]:h-5 [&_svg]:pointer-events-none gap-2',
    'disabled:pointer-events-none disabled:opacity-50',
  ],
  variants: {
    variant: {
      solid: 'bg-white/5 hover:bg-white/10',
      outline: 'border border-white/10 hover:bg-white/5',
      success:
        'bg-green-500/10 text-green-500 hover:text-green-500/80 border border-green-500/20',
      ghost: 'hover:bg-white/5',
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

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
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
        ref={ref}
        type={type}
        className={buttonStyle({ variant, size, className })}
        {...rest}
      >
        {children}
      </Comp>
    )
  },
)

Button.displayName = 'Button'
