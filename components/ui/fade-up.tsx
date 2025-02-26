'use client'

import { useInView } from '@/hooks/use-in-view'
import { Slot } from '@radix-ui/react-slot'

interface FadeUpProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The delay in seconds before the animation starts.
   */
  delay?: number
  /**
   * If true, the component will render the children as a React node.
   */
  asChild?: boolean
}

export const FadeUp = (props: FadeUpProps) => {
  const { delay = 0, asChild, ...rest } = props

  const { ref, isInView } = useInView()

  const Component = asChild ? Slot : 'div'

  return (
    <Component
      ref={ref}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `all 0.6s ease-out ${delay}s`,
        ...(isInView && {
          opacity: 1,
          transform: 'translateY(0)',
        }),
      }}
      {...rest}
    />
  )
}
