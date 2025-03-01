import { allTrips } from '@/.contentlayer/generated'
import { MDXContent } from '@/components/mdx/mdx-content'
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

  if (!trip) notFound()

  return {
    title: trip.title,
    description: trip.description,
    openGraph: {
      title: trip.title,
      description: trip.description,
      url: `${SEO.url}/trips/${trip.slug}`,
      images: [
        {
          url: createOgImage(trip.title),
          width: 1600,
          height: 836,
          alt: trip.title,
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

  if (!trip) notFound()

  return (
    <MDXContent
      data={{
        title: trip.title,
        description: trip.description,
        publishedAt: trip.publishedAt,
        thumbnail: trip.thumbnail,
        content: trip.body.code,
      }}
    />
  )
}

export default TripsSlugPage
