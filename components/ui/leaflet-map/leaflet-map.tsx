'use client'

import { cn } from '@/lib/cn'
import type { PlaceType } from '@/types/places'
import { MapContainer } from 'react-leaflet'
import { LeafletMapLayer } from './leaflet-map.layer'
import { LeafletMapMarker } from './leaflet-map.marker'

const INITIAL_MAP_ZOOM = 3

interface LeafletMapProps extends React.ComponentProps<typeof MapContainer> {
  /**
   * The places to display on the map
   */
  places?: PlaceType[]
}

export const LeafletMap = (props: LeafletMapProps) => {
  const { places, className, ...rest } = props

  return (
    <div className="flex flex-1">
      <style>{`
        .leaflet-container {
          font-family: var(--font-sans);
          background: var(--color-background);
        }

        .leaflet-popup-content-wrapper {
          background: var(--color-background);
          color: var(--color-foreground);
        }

        .leaflet-popup-content {
          margin: 0;

          a {
            color: var(--color-foreground);
          }
        }

        .leaflet-popup-tip {
          background: var(--color-background);
        }

        .leaflet-popup-close-button {
          top: 0.5rem !important;
          right: 0.5rem !important;
        }
      `}</style>

      <MapContainer
        className={cn('flex-1', className)}
        center={[0, 0]}
        zoom={INITIAL_MAP_ZOOM}
        minZoom={INITIAL_MAP_ZOOM}
        scrollWheelZoom={true}
        maxBounds={[
          [-180, 180],
          [180, -180],
        ]}
        {...rest}
      >
        <LeafletMapLayer />

        {places?.map((place) => (
          <LeafletMapMarker key={place.slug} data={place} />
        ))}
      </MapContainer>
    </div>
  )
}
