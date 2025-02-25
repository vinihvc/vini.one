import { READ_BOOKS } from '@/config/books'
import { Heading } from '@/components/ui/heading'

import { BookCard } from './_components/book-card'

const getData = async () => {
  return {
    books: READ_BOOKS,
  }
}

const BookshelfPage = async () => {
  const { books } = await getData()

  return (
    <section className="container selection:bg-amber-500">
      <div className="space-y-1">
        <Heading className="from-amber-500 to-red-500">Bookshelf</Heading>

        <h2 className='text-lg text-muted-foreground'>
          {`That's what I've been reading lately. Enjoy!`}
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-3 items-start gap-2 sm:grid-cols-5 sm:gap-5">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </section>
  )
}

export default BookshelfPage
