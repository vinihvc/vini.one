import { allTrips } from '@/.contentlayer/generated'
import dynamic from 'next/dynamic'
import { TripMap } from './_components/map'

const TripSidebar = dynamic(() => import('./_components/sidebar'))

const TripsPage = async () => {
  const publishedTrips = allTrips.filter((trip) => trip.status === 'published')

  return (
    <>
      <TripMap data={publishedTrips} />

      <TripSidebar data={publishedTrips} />
    </>
  )
}

export default TripsPage
