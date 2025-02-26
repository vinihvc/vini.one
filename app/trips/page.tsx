import { getTrips } from '@/services/requests'
import dynamic from 'next/dynamic'
import { TripMap } from './_components/map'

const TripSidebar = dynamic(() => import('./_components/sidebar'))

const TripsPage = async () => {
  const trips = await getTrips()

  return (
    <>
      <TripMap data={trips} />

      <TripSidebar data={trips} />
    </>
  )
}

export default TripsPage
