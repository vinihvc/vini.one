'use client'

import { useInView } from '@/hooks/use-in-view'
import { Slot } from '@radix-ui/react-slot'

interface FadeUpProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The side of the component to fade up from.
   *
   * @default 'top'
   */
  side?: 'top' | 'bottom' | 'left' | 'right'
  /**
   * The delay in seconds before the animation starts.
   *
   * @default 0
   */
  delay?: number
  /**
   * The threshold of the component.
   *
   * @default 0.1
   */
  threshold?: number
  /**
   * The duration of the animation.
   *
   * @default 0.4
   */
  duration?: number
  /**
   * If true, the component will blur the children.
   *
   * @default false
   */
  blur?: boolean
  /**
   * If true, the component will render the children as a React node.
   *
   * @default false
   */
  asChild?: boolean
}

export const FadeSection = (props: FadeUpProps) => {
  const {
    side = 'top',
    delay = 0,
    threshold = 0.1,
    duration = 0.4,
    blur = false,
    asChild,
    ...rest
  } = props

  const { ref, isInView } = useInView(threshold)

  const Component = asChild ? Slot : 'div'

  const transform = {
    top: {
      initial: 'translateY(10px)',
      inView: 'translateY(0)',
    },
    bottom: {
      initial: 'translateY(-10px)',
      inView: 'translateY(0)',
    },
    left: {
      initial: 'translateX(-10px)',
      inView: 'translateX(0)',
    },
    right: {
      initial: 'translateX(10px)',
      inView: 'translateX(0)',
    },
  }

  return (
    <Component
      ref={ref}
      style={{
        opacity: 0,
        transform: transform[side].initial,
        filter: blur ? 'blur(2px)' : 'none',
        transition: `all ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
        ...(isInView && {
          opacity: 1,
          transform: transform[side].inView,
          filter: blur ? 'blur(0px)' : 'none',
        }),
      }}
      {...rest}
    />
  )
}
