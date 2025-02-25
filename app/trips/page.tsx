import { LeafletMap } from '@/components/ui/leaflet-map'
import { PLACES } from '@/content/places'

const getData = async () => {
  return { places: PLACES }
}

const TripsPage = async () => {
  const { places } = await getData()

  return (
    <>
      <LeafletMap places={places} />
    </>
  )
}

export default TripsPage
