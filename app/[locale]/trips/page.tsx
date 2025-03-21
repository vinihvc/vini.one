import { allTrips } from '@/.contentlayer/generated'
import { getTranslations } from 'next-intl/server'
import dynamic from 'next/dynamic'
import { TripMap } from './_components/map'

const TripSidebar = dynamic(() => import('./_components/sidebar'))

const TripsPage = async () => {
  const publishedTrips = allTrips.filter((trip) => trip.status === 'published')

  const t = await getTranslations('pages.trips.section.sidebar')

  return (
    <>
      <TripMap data={publishedTrips} />

      <TripSidebar
        data={publishedTrips}
        translations={{
          open: t('open'),
          title: t('title'),
          description: t('description'),
          close: t('close'),
        }}
      />
    </>
  )
}

export default TripsPage
