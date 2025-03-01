import { cn } from '@/lib/cn'
import { formatDate, readTime } from '@/utils/formatter'
import { Calendar, Clock } from 'lucide-react'
import { BlurImage } from '../ui/blur-image'
import { MDXComponents } from './mdx-components'
import { TableOfContent } from './table-of-content'

interface MDXContentProps extends React.ComponentProps<'article'> {
  data: {
    title: string
    description: string
    publishedAt: string
    thumbnail: {
      path: string
      alt: string
    }
    content: string
  }
}

export const MDXContent = (props: MDXContentProps) => {
  const { data, ...rest } = props

  return (
    <article
      className={cn(
        'prose-invert prose container prose-hr:my-4 prose-img:my-0 text-muted-foreground prose-a:no-underline selection:bg-rose-500 max-sm:prose-h1:text-2xl',
      )}
      {...rest}
    >
      <header>
        <h1 className="mb-2">{data.title}</h1>

        <p className="!my-0 text-foreground opacity-90 sm:text-lg">
          {data.description}
        </p>

        <hr className="border-0 border-border border-t" />

        <div className="flex justify-between text-sm">
          <time
            dateTime={data.publishedAt}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <Calendar className="h-4 w-4" />

            {formatDate(data.publishedAt, {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>

          <time className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />

            {readTime(data.content)}
          </time>
        </div>
      </header>

      <figure>
        <BlurImage
          src={data.thumbnail.path}
          alt={data.thumbnail.alt}
          className="aspect-square rounded-md"
          fill
        />

        <figcaption>{data.thumbnail.alt}</figcaption>
      </figure>

      <TableOfContent content={data.content} />

      <MDXComponents content={data.content} />
    </article>
  )
}
