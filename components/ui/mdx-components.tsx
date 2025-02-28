import { cn } from '@/lib/cn'
import { slugify } from '@/utils/formatter'
import { Hash } from 'lucide-react'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Link from 'next/link'
import React from 'react'
import { BlurImage } from './blur-image'

const hashtagClasses =
  'absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-muted-foreground transition-opacity'

const components: MDXComponentsType = {
  BlurImage,
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

interface MDXComponentsProps extends React.ComponentProps<'div'> {
  code: string
}

export const MDXComponents = (props: MDXComponentsProps) => {
  const { code, className, children, ...rest } = props

  const Component = useMDXComponent(code)

  return (
    <div
      className={cn(
        'prose-invert prose container prose-img:my-0 text-muted-foreground prose-a:no-underline',
        className,
      )}
      {...rest}
    >
      {children}

      <Component components={components} />
    </div>
  )
}

const childrenToString = (children: React.ReactNode) => {
  return React.Children.toArray(children).join('')
}
