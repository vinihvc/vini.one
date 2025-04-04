'use client'

import { cn } from '@/lib/cn'
import type { ImageProps } from 'next/image'
import NextImage from 'next/image'
import React from 'react'

interface BlurImageProps extends ImageProps {
  /**
   * The fallback image to display if the image is not available
   */
  fallbackImage?: string
}

export const BlurImage = (props: BlurImageProps) => {
  const {
    sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    src,
    className,
    fallbackImage,
    ...rest
  } = props

  const [imageSrc, setImageSrc] = React.useState(src)

  const [isLoading, setLoading] = React.useState(true)

  const handleError = () => {
    setLoading(false)

    setImageSrc(fallbackImage || '/images/fallback.svg')
  }

  return (
    <div
      className={cn(
        'relative h-full w-full overflow-hidden',
        { 'animate-pulse': isLoading },
        className,
      )}
    >
      <NextImage
        {...rest}
        src={imageSrc}
        className={cn('h-full w-full object-cover transition', {
          'scale-[1.02] blur-xl': isLoading,
        })}
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(500, 300))}`}
        sizes={sizes}
        onLoad={() => setLoading(false)}
        onError={handleError}
      />
    </div>
  )
}

const toBase64 = (str: string) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str)

const shimmer = (w: number, h: number) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#0000030" offset="20%" />
      <stop stop-color="#12121230" offset="50%" />
      <stop stop-color="#0000030" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#0000030" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>
`
