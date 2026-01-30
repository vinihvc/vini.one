"use client";

import type { Page } from "fumadocs-core/source";
import type { DocCollectionEntry } from "fumadocs-mdx/runtime/server";
import dynamic from "next/dynamic";
import type { TripType } from "@/types/trips";

const LeafletMap = dynamic(() => import("@/components/ui/leaflet-map"), {
  ssr: false,
});

interface TripMapProps {
  /**
   * The places to display on the map
   */
  data?: Page<DocCollectionEntry<"trips", TripType>>[];
}

export const TripMap = (props: TripMapProps) => {
  const { data } = props;

  return <LeafletMap data={data} />;
};
