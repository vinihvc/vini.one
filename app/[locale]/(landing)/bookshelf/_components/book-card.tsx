import { BlurImage } from '@/components/ui/blur-image'
import { Rating } from '@/components/ui/rating'
import type { BookType } from '@/content/books'
import { cn } from '@/lib/cn'
import type React from 'react'

interface BookCardProps extends React.ComponentProps<'article'> {
  /**
   * The book to be displayed
   */
  data: BookType
}

export const BookCard = async (props: BookCardProps) => {
  const { data, className, ...rest } = props

  return (
    <article
      // biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
      tabIndex={0}
      aria-label={data.title}
      className={cn(
        'group relative aspect-[9/13] overflow-hidden rounded-lg',
        'focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        className,
      )}
      {...rest}
    >
      <BlurImage
        src={`/images/books/${data.thumbnail}.jpg`}
        alt={`Cover of ${data.title}`}
        className="rounded-md"
        quality={20}
        fill
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="md:group-hover:-top-1 relative flex items-center justify-center transition-all group-hover:opacity-100 md:top-2 md:opacity-0">
          <Rating value={data.rate} />
        </div>

        <div className="flex h-10 items-center bg-black/70 px-1">
          <h1 className="line-clamp-2 font-mono font-semibold text-xs">
            {data.title}
          </h1>
        </div>
      </div>
    </article>
  )
}
