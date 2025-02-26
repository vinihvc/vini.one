'use client'

import type { TravelType } from '@/types/travel'
import type { TripType } from '@/types/trip'
import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('@/components/ui/leaflet-map'), {
  ssr: false,
})

interface TripMapProps {
  /**
   * The places to display on the map
   */
  data: TripType[]
  /**
   * The travel to display on the map
   */
  currentLocation?: TravelType
}

export const TripMap = (props: TripMapProps) => {
  const { data, currentLocation } = props

  return <LeafletMap places={data} currentLocation={currentLocation} />
}
