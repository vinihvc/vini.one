import type { Metadata } from "next";
import { FadeSection } from "@/components/ui/fade-section";
import { Heading } from "@/components/ui/heading";
import { absoluteUrl } from "@/lib/url";
import { bookshelfSource } from "@/lib/source";
import { ogImage } from "@/utils/og-image";
import { BookCard } from "./_components/book-card";

export const metadata: Metadata = {
  title: "Bookshelf",
  openGraph: {
    title: "Bookshelf",
    url: absoluteUrl("/bookshelf"),
    images: [{ url: ogImage("Bookshelf"), width: 1200, height: 630 }],
  },
};

const BookshelfPage = async () => {
  const books = bookshelfSource.getPages();

  return (
    <section className="container">
      <FadeSection className="space-y-1">
        <Heading className="from-amber-500 to-red-500">Bookshelf</Heading>

        <h2 className="text-lg text-muted-foreground">
          {`That's what I've been reading lately. Enjoy!`}
        </h2>
      </FadeSection>

      <div className="mt-10 grid grid-cols-3 items-start gap-2 sm:grid-cols-5 sm:gap-5">
        {books.map(({ data }, index) => {
          const TOTAL_COLS = 5;

          const normalizedIndex = index % TOTAL_COLS;
          const incrementalDelay = normalizedIndex * 0.05;

          return (
            <FadeSection delay={incrementalDelay} key={data.title}>
              <BookCard data={data} />
            </FadeSection>
          );
        })}
      </div>
    </section>
  );
};

export default BookshelfPage;
