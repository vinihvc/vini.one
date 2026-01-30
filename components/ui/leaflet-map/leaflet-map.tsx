"use client";

import type { Page } from "fumadocs-core/source";
import type { DocCollectionEntry } from "fumadocs-mdx/runtime/server";
import { MapContainer } from "react-leaflet";
import { cn } from "@/lib/cn";
import type { TripType } from "@/types/trips";
import { LeafletMapLayer } from "./leaflet-map.layer";
import { LeafletMapMarker } from "./leaflet-map.marker";

const INITIAL_MAP_ZOOM = 3;

interface LeafletMapProps extends React.ComponentProps<typeof MapContainer> {
  /**
   * The places to display on the map
   */
  data?: Page<DocCollectionEntry<"trips", TripType>>[];
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

        {data?.map((place) => (
          <LeafletMapMarker data={place} key={place.url} />
        ))}
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
