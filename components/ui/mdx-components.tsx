import { cn } from '@/lib/cn'
import { slugify } from '@/utils/formatter'
import { Hash, NotebookText } from 'lucide-react'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer2/hooks'
import Link from 'next/link'
import React from 'react'
import { BlurImage } from './blur-image'

const hashtagClasses =
  'absolute -right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-muted-foreground transition-opacity'

const linkClasses =
  'outline-0 focus-visible:ring-2 focus-visible:ring-rose-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md'

const components: MDXComponentsType = {
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

interface MDXComponentsProps {
  /**
   * The content to be rendered
   */
  content: string
  /**
   * Whether to show the table of contents
   *
   * @default true
   */
  showTableOfContents?: boolean
}

export const MDXComponents = (props: MDXComponentsProps) => {
  const { content, showTableOfContents = true } = props

  const Component = useMDXComponent(content)

  return (
    <>
      {showTableOfContents && (
        <div className="group relative my-8 overflow-clip rounded-lg border bg-card p-4">
          <NotebookText className="absolute top-4 right-4 stroke-1 opacity-60 transition-opacity group-hover:opacity-100 md:h-20 md:w-20" />

          <h4 className="mt-0 mb-3 font-medium text-lg">
            Neste artigo você vai ler:
          </h4>
          <ol className="mb-0 text-base">
            <Component
              components={{
                h1: () => null,
                h2: ({ children }) => (
                  <li>
                    <a
                      href={`#${slugify(childrenToString(children))}`}
                      className={cn(
                        'inline-flex text-muted-foreground hover:text-rose-500',
                        linkClasses,
                      )}
                    >
                      {children}
                    </a>
                  </li>
                ),
                h3: () => null,
                h4: () => null,
                p: () => null,
                ul: () => null,
              }}
            />
          </ol>
        </div>
      )}

      <Component components={components} />
    </>
  )
}

const childrenToString = (children: React.ReactNode) => {
  return React.Children.toArray(children).join('')
}
