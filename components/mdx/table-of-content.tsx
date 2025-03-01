import { cn } from '@/lib/cn'
import { slugify } from '@/utils/formatter'
import { NotebookText } from 'lucide-react'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'
import { MDXComponents, childrenToString, linkClasses } from './mdx-components'

const mdxComponents: MDXComponentsType = {
  h1: () => null,
  h2: ({ children }) => (
    <li>
      <a
        href={`#${slugify(childrenToString(children))}`}
        className={cn(
          'inline-flex text-muted-foreground hover:text-rose-500 active:text-rose-500',
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
}

interface TableOfContentProps {
  /**
   * The content to be rendered
   */
  content: string
}

export const TableOfContent = (props: TableOfContentProps) => {
  const { content } = props

  return (
    <div className="group relative my-8 overflow-clip rounded-lg border bg-card p-4">
      <NotebookText className="absolute top-4 right-4 stroke-1 opacity-60 transition-opacity group-hover:opacity-100 md:h-10 md:w-10" />

      <h4 className="mt-0 mb-3 font-medium text-lg">
        Neste artigo você vai ler:
      </h4>

      <ol className="mb-0 text-base">
        <MDXComponents content={content} components={mdxComponents} />
      </ol>
    </div>
  )
}
