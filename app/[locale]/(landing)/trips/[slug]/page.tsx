import { allTrips } from '@/.contentlayer/generated'
import { MDXContent } from '@/components/mdx/mdx-content'
import { SITE_CONFIG } from '@/config/site'
import { createOgImage } from '@/utils/create-og-image'
import type { Locale } from 'next-intl'
import { notFound } from 'next/navigation'

interface TripsSlugPageProps {
  params: Promise<{
    slug: string
    locale: Locale
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
      url: `${SITE_CONFIG.url}/trips/${trip.slug}`,
      images: [
        {
          url: createOgImage(trip.title),
          width: 1200,
          height: 630,
          alt: trip.title,
        },
      ],
    },
  }
}

const TripsSlugPage = async (props: TripsSlugPageProps) => {
  const { slug, locale } = await props.params

  const trip = allTrips.find(
    (trip) => trip.slug === slug && trip.status === 'published',
  )

  if (!trip) notFound()

  return (
    <MDXContent
      locale={locale}
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
