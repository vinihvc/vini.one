'use client'

import type { PlaceType } from '@/types/places'
import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('@/components/ui/leaflet-map'), {
  ssr: false,
})

interface TripMapProps {
  /**
   * The places to display on the map
   */
  places: PlaceType[]
}

export const TripMap = (props: TripMapProps) => {
  const { places } = props

  return <LeafletMap places={places} />
}
