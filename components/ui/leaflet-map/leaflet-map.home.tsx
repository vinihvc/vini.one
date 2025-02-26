import type { TravelType } from '@/types/travel'
import L from 'leaflet'
import { Marker } from 'react-leaflet'

export const markerIcon = L.icon({
  iconUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzM0OTVmZiIgY2xhc3M9ImJpIGJpLWNpcmNsZS1maWxsIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxjaXJjbGUgY3g9IjgiIGN5PSI4IiByPSI4Ii8+Cjwvc3ZnPg==',
  iconRetinaUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iIzM0OTVmZiIgY2xhc3M9ImJpIGJpLWNpcmNsZS1maWxsIiB2aWV3Qm94PSIwIDAgMTYgMTYiPgogIDxjaXJjbGUgY3g9IjgiIGN5PSI4IiByPSI4Ii8+Cjwvc3ZnPg==',
  iconSize: [10, 10],
  iconAnchor: [16, 16],
  className:
    'outline-0 focus-visible:ring-2 focus-visible:ring-rose-500 ring-2 ring-blue-500 rounded-full p-2 ring-offset-2 ring-offset-[#1B1B1A]',
  popupAnchor: [0, -35],
})

interface LeafletMapHomeMarkerProps
  extends Omit<React.ComponentProps<typeof Marker>, 'icon' | 'position'> {
  /**
   * The data of the place
   */
  data: TravelType
}

export const LeafletMapHomeMarker = (props: LeafletMapHomeMarkerProps) => {
  const { data, ...rest } = props

  return (
    <Marker
      title={`Current location: ${data.city}, ${data.country}`}
      {...rest}
      position={[data.location.latitude, data.location.longitude]}
      icon={markerIcon}
    />
  )
}
