import React from 'react'

export const useInView = (threshold = 0.1) => {
  const ref = React.useRef<HTMLDivElement>(null)

  const [isInView, setIsInView] = React.useState(false)
  const [hasPlayed, setHasPlayed] = React.useState(false)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return

        if (entry.isIntersecting && !hasPlayed) {
          setIsInView(true)
          setHasPlayed(true)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, hasPlayed])

  return { ref, isInView }
}
