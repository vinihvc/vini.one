import { FadeSection } from '@/components/ui/fade-section'
import { Heading } from '@/components/ui/heading'
import { BOOKS } from '@/content/books'
import type { Metadata } from 'next'
import { BookCard } from './_components/book-card'

export const metadata: Metadata = {
  title: 'Bookshelf',
}

const BookshelfPage = async () => {
  return (
    <section className="container selection:bg-amber-500">
      <FadeSection className="space-y-1">
        <Heading className="from-amber-500 to-red-500">Bookshelf</Heading>

        <h2 className="text-lg text-muted-foreground">
          {`That's what I've been reading lately. Enjoy!`}
        </h2>
      </FadeSection>

      <div className="mt-10 grid grid-cols-3 items-start gap-2 sm:grid-cols-5 sm:gap-5">
        {BOOKS.map((book, index) => {
          const TOTAL_COLS = 5

          const normalizedIndex = index % TOTAL_COLS
          const incrementalDelay = normalizedIndex * 0.05

          return (
            <FadeSection delay={incrementalDelay} key={book.title}>
              <BookCard data={book} />
            </FadeSection>
          )
        })}
      </div>
    </section>
  )
}

export default BookshelfPage
