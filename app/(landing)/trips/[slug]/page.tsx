import { allTrips } from '@/.contentlayer/generated'
import { BlurImage } from '@/components/ui/blur-image'
import { MDXComponents } from '@/components/ui/mdx-components'
import { SEO } from '@/config/seo'
import { createOgImage } from '@/utils/create-og-image'
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
    <MDXComponents code={trip.body.code}>
      <figure className="mb-10 grid gap-2">
        <BlurImage
          src={trip.thumbnail.path}
          alt={trip.thumbnail.alt}
          className="aspect-video rounded-md sm:scale-105"
          fill
        />

        <figcaption>{trip.thumbnail.alt}</figcaption>
      </figure>
    </MDXComponents>
  )
}

export default TripsSlugPage
