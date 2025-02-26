'use client'

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
}

export const TripMap = (props: TripMapProps) => {
  const { data } = props

  return <LeafletMap places={data} />
}
