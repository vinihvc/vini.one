"use client";

import dynamic from "next/dynamic";
import type { SerializableTrip } from "@/utils/serializer";

const LeafletMap = dynamic(() => import("@/components/ui/leaflet-map"), {
  ssr: false,
});

interface TripMapProps {
  /**
   * The trips to display on the map
   */
  data?: SerializableTrip[];
}

export const TripMap = (props: TripMapProps) => {
  return <LeafletMap {...props} />;
};
