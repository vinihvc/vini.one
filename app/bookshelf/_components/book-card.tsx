import { cn } from '@/lib/cn'
import type React from 'react'

import { PlaceholderImage } from '@/components/ui/placeholder-image'
import { Rating } from '@/components/ui/rating'
import type { BookType } from '@/config/books'

interface BookCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The book to be displayed
   */
  book: BookType
}

export const BookCard = async (props: BookCardProps) => {
  const { book, className, ...rest } = props

  return (
    <article
      title={book.title}
      className={cn(
        'group relative aspect-[9/13] overflow-hidden rounded-lg',
        className,
      )}
      {...rest}
    >
      <PlaceholderImage
        type="color"
        src={`/images/books/${book.thumbnail}.jpg`}
        alt={`Cover of ${book.title}`}
        className="pointer-events-none scale-105 rounded object-cover"
        quality={20}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        fill
      />

      <div className="absolute inset-x-0 bottom-0">
        <div className="md:group-hover:-top-1 relative flex items-center justify-center transition-all group-hover:opacity-100 md:top-2 md:opacity-0">
          <Rating value={book.rate} />
        </div>

        <div className="flex h-10 items-center bg-black/70 px-1">
          <h1 className="line-clamp-2 font-mono font-semibold text-xs">
            {book.title}
          </h1>
        </div>
      </div>
    </article>
  )
}
