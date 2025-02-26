import { getTravel, getTrips } from '@/services/requests'
import dynamic from 'next/dynamic'
import { TripMap } from './_components/map'

const TripSidebar = dynamic(() => import('./_components/sidebar'))

const TripsPage = async () => {
  const [trips, travel] = await Promise.all([getTrips(), getTravel()])

  const currentLocation = travel.at(0)

  return (
    <>
      <TripMap data={trips} currentLocation={currentLocation} />

      <TripSidebar data={trips} />
    </>
  )
}

export default TripsPage
