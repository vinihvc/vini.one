"use client";

import { MapContainer } from "react-leaflet";
import type { TravelType } from "@/content/travel";
import { cn } from "@/lib/cn";
import type { TripItem } from "@/types/source";
import { LeafletMapHomeMarker } from "./leaflet-map.home";
import { LeafletMapLayer } from "./leaflet-map.layer";
import { LeafletMapMarker } from "./leaflet-map.marker";

const INITIAL_MAP_ZOOM = 3;

interface LeafletMapProps extends React.ComponentProps<typeof MapContainer> {
	/**
	 * The places to display on the map
	 */
	places?: TripItem[];
	/**
	 * The current location to display on the map
	 */
	currentLocation?: TravelType;
}

const LeafletMap = (props: LeafletMapProps) => {
	const { places, currentLocation, className, ...rest } = props;

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
				className={cn("flex-1", className)}
				center={[0, 0]}
				zoom={INITIAL_MAP_ZOOM}
				minZoom={INITIAL_MAP_ZOOM}
				zoomControl={false}
				attributionControl={false}
				scrollWheelZoom
				worldCopyJump
				{...rest}
			>
				<LeafletMapLayer />

				{places?.map((place) => (
					<LeafletMapMarker key={place.slug} data={place} />
				))}

				{currentLocation && <LeafletMapHomeMarker data={currentLocation} />}
			</MapContainer>
		</div>
	);
};

export default LeafletMap;
