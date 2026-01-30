"use client";

import { MapContainer } from "react-leaflet";
import { cn } from "@/lib/cn";
import type { SerializableTrip } from "@/utils/serializer";
import { LeafletMapLayer } from "./leaflet-map.layer";
import { LeafletMapMarker } from "./leaflet-map.marker";

const INITIAL_MAP_ZOOM = 3;

interface LeafletMapProps extends React.ComponentProps<typeof MapContainer> {
  /**
   * The places to display on the map
   */
  data?: SerializableTrip[];
}

const LeafletMap = (props: LeafletMapProps) => {
  const { data, className, ...rest } = props;

  return (
    <div className="flex flex-1">
      <style>{`
        .leaflet-container {
          font-family: var(--font-sans);
          background: #1B1B1A;
        }

        .leaflet-pane {
          z-index: 40;
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
          border-radius: 9999px;
        }
      `}</style>

      <MapContainer
        attributionControl={false}
        center={[0, 0]}
        className={cn("flex-1", className)}
        minZoom={INITIAL_MAP_ZOOM}
        scrollWheelZoom
        worldCopyJump
        zoom={INITIAL_MAP_ZOOM}
        zoomControl={false}
        {...rest}
      >
        <LeafletMapLayer />

        {data?.map((trip) => (
          <LeafletMapMarker data={trip} key={trip.url} />
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
