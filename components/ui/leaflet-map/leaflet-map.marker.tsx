import type { TripType } from '@/types/trip'
import L from 'leaflet'
import Image from 'next/image'
import { Marker, Popup } from 'react-leaflet'
import { Button } from '../button'
import { NavLink } from '../nav-link'

const markerIcon = L.icon({
  iconUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIGNsYXNzPSJiaSBiaS1nZW8tYWx0LWZpbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTggMTZzNi01LjY4NiA2LTEwQTYgNiAwIDAgMCAyIDZjMCA0LjMxNCA2IDEwIDYgMTBtMC03YTMgMyAwIDEgMSAwLTYgMyAzIDAgMCAxIDAgNiIvPgo8L3N2Zz4=',
  iconRetinaUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIGNsYXNzPSJiaSBiaS1nZW8tYWx0LWZpbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTggMTZzNi01LjY4NiA2LTEwQTYgNiAwIDAgMCAyIDZjMCA0LjMxNCA2IDEwIDYgMTBtMC03YTMgMyAwIDEgMSAwLTYgMyAzIDAgMCAxIDAgNiIvPgo8L3N2Zz4=',
  iconSize: [24, 24],
  iconAnchor: [16, 16],
  popupAnchor: [0, -35],
})

interface LeafletMapMarkerProps
  extends Omit<React.ComponentProps<typeof Marker>, 'icon' | 'position'> {
  /**
   * The data of the place
   */
  data: TripType
}

export const LeafletMapMarker = (props: LeafletMapMarkerProps) => {
  const { data, ...rest } = props

  return (
    <Marker
      {...rest}
      position={[data.location.latitude, data.location.longitude]}
      icon={markerIcon}
    >
      <Popup minWidth={300} closeOnEscapeKey>
        <article className="flex h-auto flex-col gap-4 px-4 py-2">
          <h1 className="font-medium text-base">{data.title}</h1>

          <div className="grid grid-cols-2 gap-3">
            {data.thumbnails.map((thumbnail) => (
              <div
                key={thumbnail}
                className="relative aspect-video overflow-hidden rounded-md"
              >
                <Image
                  src={thumbnail}
                  alt={data.title}
                  className="object-cover"
                  fill
                />
              </div>
            ))}
          </div>

          <Button className="bg-blue-500 hover:bg-blue-600" size="sm" asChild>
            <NavLink href={`/trips/${data.slug}`}>
              Check all details about this trip
            </NavLink>
          </Button>
        </article>
      </Popup>
    </Marker>
  )
}
