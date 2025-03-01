import { allTrips } from '@/.contentlayer/generated'
import { BlurImage } from '@/components/ui/blur-image'
import { MDXComponents } from '@/components/ui/mdx-components'
import { SEO } from '@/config/seo'
import { createOgImage } from '@/utils/create-og-image'
import { formatDate, readTime } from '@/utils/formatter'
import { Calendar } from 'lucide-react'
import { notFound } from 'next/navigation'

interface TripsSlugPageProps {
  params: Promise<{
    slug: string
  }>
}

export const generateStaticParams = async () => {
  return allTrips.map((trip) => ({
    slug: trip.slug,
  }))
}

export const generateMetadata = async ({ params }: TripsSlugPageProps) => {
  const { slug } = await params

  const trip = allTrips.find(
    (trip) => trip.slug === slug && trip.status === 'published',
  )

  if (!trip) {
    notFound()
  }

  const title = `${trip.city}, ${trip.country}`

  return {
    title,
    description: trip.description,
    openGraph: {
      title,
      description: trip.description,
      url: `${SEO.url}/trips/${trip.slug}`,
      images: [
        {
          url: createOgImage(title),
          width: 1600,
          height: 836,
          alt: title,
        },
      ],
    },
  }
}

const TripsSlugPage = async (props: TripsSlugPageProps) => {
  const { slug } = await props.params

  const trip = allTrips.find(
    (trip) => trip.slug === slug && trip.status === 'published',
  )

  if (!trip) {
    notFound()
  }

  return (
    <div className="prose-invert prose container relative prose-hr:my-4 prose-img:my-0 text-muted-foreground prose-a:no-underline selection:bg-rose-500">
      <header>
        <h1 className="mb-2">
          {trip.city}, {trip.country}
        </h1>

        <p className="!my-0 text-foreground text-lg opacity-90">
          {trip.description}
        </p>

        <hr className="border-0 border-t" />

        <div className="flex justify-between">
          <time
            dateTime={trip.publishedAt}
            className="flex items-center gap-2 text-base text-muted-foreground"
          >
            <Calendar className="h-4 w-4" />

            {formatDate(trip.publishedAt, {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>

          <div>{readTime(trip.body.code)}</div>
        </div>
      </header>

      <figure>
        <BlurImage
          src={trip.thumbnail.path}
          alt={trip.thumbnail.alt}
          className="aspect-square rounded-md"
          fill
        />

        <figcaption>{trip.thumbnail.alt}</figcaption>
      </figure>

      <MDXComponents content={trip.body.code} />
    </div>
  )
}

export default TripsSlugPage
