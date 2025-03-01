import { cn } from '@/lib/cn'
import { slugify } from '@/utils/formatter'
import { Hash } from 'lucide-react'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import Link from 'next/link'
import React from 'react'
import { BlurImage } from '../ui/blur-image'

interface MDXComponentsProps {
  /**
   * The content to be rendered
   */
  content: string
  /**
   * Override the default components
   *
   * @default {}
   */
  components?: MDXComponentsType
}

export const MDXComponents = (props: MDXComponentsProps) => {
  const { content, components } = props

  const Component = useMDXComponent(content)

  return <Component components={{ ...mdxComponents, ...components }} />
}

export const hashtagClasses =
  'absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-muted-foreground transition-opacity'

export const linkClasses =
  'outline-0 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md'

const mdxComponents: MDXComponentsType = {
  BlurImage,
  h2: ({ children, ...props }: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2
      {...props}
      id={slugify(childrenToString(children))}
      style={{ marginTop: '-100px', paddingTop: '100px' }}
    >
      <a
        className={cn('group relative', linkClasses)}
        href={`#${slugify(childrenToString(children))}`}
      >
        {children}

        <span className={hashtagClasses}>
          <Hash className="h-4 w-4" />
        </span>
      </a>
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentPropsWithoutRef<'h3'>) => (
    <h3
      {...props}
      id={slugify(childrenToString(children))}
      style={{ marginTop: '-100px', paddingTop: '100px' }}
    >
      <a
        className={cn('group relative', linkClasses)}
        href={`#${slugify(childrenToString(children))}`}
      >
        {children}

        <span className={hashtagClasses}>
          <Hash className="h-4 w-4" />
        </span>
      </a>
    </h3>
  ),
  h4: ({ children, ...props }: React.ComponentProps<'h4'>) => (
    <h4
      {...props}
      id={slugify(childrenToString(children))}
      style={{ marginTop: '-100px', paddingTop: '100px' }}
    >
      <a
        className={cn('group relative', linkClasses)}
        href={`#${slugify(childrenToString(children))}`}
      >
        {children}

        <span className={hashtagClasses}>
          <Hash className="h-4 w-4" />
        </span>
      </a>
    </h4>
  ),
  a: ({ href, ...props }: React.ComponentProps<'a'>) => {
    if (href?.startsWith('/')) {
      return <Link href={href} className={linkClasses} {...props} />
    }

    if (href?.startsWith('#')) {
      return <a href={href} className={linkClasses} {...props} />
    }

    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={linkClasses}
        {...props}
      />
    )
  },
}

export const childrenToString = (children: React.ReactNode) => {
  return React.Children.toArray(children).join('')
}
