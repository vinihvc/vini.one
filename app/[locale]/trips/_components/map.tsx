'use client'

import type { Trip } from '@/.contentlayer/generated'
import type { TravelType } from '@/content/travel'
import dynamic from 'next/dynamic'

const LeafletMap = dynamic(() => import('@/components/ui/leaflet-map'), {
  ssr: false,
})

interface TripMapProps {
  /**
   * The places to display on the map
   */
  data?: Trip[]
  /**
   * The travel to display on the map
   */
  currentLocation?: TravelType
}

export const TripMap = (props: TripMapProps) => {
  const { data, currentLocation } = props

  return <LeafletMap places={data} currentLocation={currentLocation} />
}
