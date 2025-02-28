'use client'

import { cn } from '@/lib/cn'
import { useBlogPost } from '../context'
import { DEFAULT_FONT_FAMILY } from '../data'

interface BlogPostWrapperProps extends React.ComponentProps<'div'> {}

export const BlogPostWrapper = (props: BlogPostWrapperProps) => {
  const { className, ...rest } = props

  const { fontSize, containerWidth, fontFamily } = useBlogPost()

  return (
    <div
      className={cn(
        'prose prose-invert relative mx-auto w-full px-4 text-muted-foreground prose-a:no-underline transition-all',
        className,
      )}
      style={{
        fontSize: `${fontSize}px`,
        maxWidth: containerWidth,
        fontFamily: fontFamily
          ? `${fontFamily}, sans-serif`
          : DEFAULT_FONT_FAMILY,
      }}
      {...rest}
    />
  )
}
