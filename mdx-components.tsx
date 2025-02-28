import { Hash } from 'lucide-react'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import React from 'react'
import { slugify } from './utils/formatter'

const hashtagClasses =
  'absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-muted-foreground transition-opacity'

const components: MDXComponents = {
  h2: ({ children, ...props }: React.ComponentPropsWithoutRef<'h2'>) => (
    <h2
      {...props}
      id={slugify(childrenToString(children))}
      style={{ marginTop: '-100px', paddingTop: '100px' }}
    >
      <a
        className="group relative"
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
        className="group relative"
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
        className="group relative"
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
      return <Link href={href} {...props} />
    }

    if (href?.startsWith('#')) {
      return <a href={href} {...props} />
    }

    return (
      <a href={href} target="_blank" rel="noopener noreferrer" {...props} />
    )
  },
}

export const useMDXComponents = (): MDXComponents => {
  return components
}

const childrenToString = (children: React.ReactNode) => {
  return React.Children.toArray(children).join('')
}
