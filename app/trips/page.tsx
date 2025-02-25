import { PLACES } from '@/content/places'
import { TripMap } from './_components/map'

const getData = async () => {
  return { places: PLACES }
}

const TripsPage = async () => {
  const { places } = await getData()

  return (
    <>
      <TripMap places={places} />
    </>
  )
}

export default TripsPage
