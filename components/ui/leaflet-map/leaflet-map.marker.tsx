'use client'

import type { Trip } from '@/.contentlayer/generated'
import { formatDate } from '@/utils/formatter'
import L from 'leaflet'
import { useLocale } from 'next-intl'
import { Marker, Popup } from 'react-leaflet'
import { BlurImage } from '../blur-image'
import { Button } from '../button'
import { NavLink } from '../nav-link'

const markerIcon = L.icon({
  iconUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIGNsYXNzPSJiaSBiaS1nZW8tYWx0LWZpbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTggMTZzNi01LjY4NiA2LTEwQTYgNiAwIDAgMCAyIDZjMCA0LjMxNCA2IDEwIDYgMTBtMC03YTMgMyAwIDEgMSAwLTYgMyAzIDAgMCAxIDAgNiIvPgo8L3N2Zz4=',
  iconRetinaUrl:
    'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0id2hpdGUiIGNsYXNzPSJiaSBiaS1nZW8tYWx0LWZpbGwiIHZpZXdCb3g9IjAgMCAxNiAxNiI+CiAgPHBhdGggZD0iTTggMTZzNi01LjY4NiA2LTEwQTYgNiAwIDAgMCAyIDZjMCA0LjMxNCA2IDEwIDYgMTBtMC03YTMgMyAwIDEgMSAwLTYgMyAzIDAgMCAxIDAgNiIvPgo8L3N2Zz4=',
  iconSize: [24, 24],
  iconAnchor: [16, 16],
  className:
    'outline-0 focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full p-2 ring-offset-2 ring-offset-[#1B1B1A]',
  popupAnchor: [0, -35],
})

interface LeafletMapMarkerProps
  extends Omit<React.ComponentProps<typeof Marker>, 'icon' | 'position'> {
  /**
   * The data of the place
   */
  data: Trip
}

export const LeafletMapMarker = (props: LeafletMapMarkerProps) => {
  const { data, ...rest } = props

  const firstTwoPhotos = data.photos.slice(0, 2)

  const locale = useLocale()

  const formattedDate = formatDate(
    data.arrivalDate,
    {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    },
    locale,
  )

  return (
    <Marker
      title={`${data.city}, ${data.country}`}
      {...rest}
      position={[data.location.latitude, data.location.longitude]}
      icon={markerIcon}
    >
      <Popup minWidth={300} closeOnEscapeKey>
        <article className="flex h-auto flex-col gap-4 px-4 py-2 selection:bg-blue-500">
          <div>
            <h1 className="font-medium text-base">
              {data.city}, {data.country}
            </h1>

            <time
              className="text-muted-foreground text-xs"
              dateTime={formattedDate}
            >
              {formattedDate}
            </time>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {firstTwoPhotos.map((photo) => (
              <BlurImage
                key={photo}
                src={photo}
                alt={`${data.city}, ${data.country}`}
                className="aspect-square rounded-md object-cover"
                fill
              />
            ))}
          </div>

          <Button variant="primary" size="sm" asChild>
            <NavLink href={`/trips/${data.slug}`}>
              Check all details about this trip
            </NavLink>
          </Button>
        </article>
      </Popup>
    </Marker>
  )
}
