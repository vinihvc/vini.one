"use client";

import dynamic from "next/dynamic";
import type { TravelType } from "@/content/travel";
import type { TripItem } from "@/types/source";

const LeafletMap = dynamic(() => import("@/components/ui/leaflet-map"), {
	ssr: false,
});

interface TripMapProps {
	/**
	 * The places to display on the map
	 */
	data?: TripItem[];
	/**
	 * The travel to display on the map
	 */
	currentLocation?: TravelType;
}

export const TripMap = (props: TripMapProps) => {
	const { data, currentLocation } = props;

	return <LeafletMap places={data} currentLocation={currentLocation} />;
};
