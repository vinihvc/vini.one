import { Heading } from '@/components/ui/heading'
import { getBooks } from '@/services/requests'
import type { Metadata } from 'next'
import { BookCard } from './_components/book-card'

export const metadata: Metadata = {
  title: 'Bookshelf',
}

const BookshelfPage = async () => {
  const data = await getBooks()

  return (
    <section className="container selection:bg-amber-500">
      <div className="space-y-1">
        <Heading className="from-amber-500 to-red-500">Bookshelf</Heading>

        <h2 className="text-lg text-muted-foreground">
          {`That's what I've been reading lately. Enjoy!`}
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-3 items-start gap-2 sm:grid-cols-5 sm:gap-5">
        {data.map((book) => (
          <BookCard key={book.title} data={book} />
        ))}
      </div>
    </section>
  )
}

export default BookshelfPage
