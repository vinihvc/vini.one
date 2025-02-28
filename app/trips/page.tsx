import { TRIPS } from '@/content/trips'
import dynamic from 'next/dynamic'
import { TripMap } from './_components/map'

const TripSidebar = dynamic(() => import('./_components/sidebar'))

const TripsPage = async () => {
  const trips = TRIPS

  return (
    <>
      <TripMap data={trips} />

      <TripSidebar data={trips} />
    </>
  )
}

export default TripsPage
