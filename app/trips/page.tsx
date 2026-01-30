import dynamic from "next/dynamic";
import { SITE_CONFIG } from "@/config/site";
import { tripsSource } from "@/lib/source";
import { ogImage } from "@/utils/og-image";
import { serializeTrip } from "@/utils/serializer";
import { TripMap } from "./_components/map";

const TripSidebar = dynamic(() => import("./_components/sidebar"));

export const generateMetadata = async () => {
  return {
    title: "Trips",
    openGraph: {
      title: "Trips",
      url: `${SITE_CONFIG.url}/trips`,
      images: [{ url: ogImage("Trips"), width: 1200, height: 630 }],
    },
  };
};

const TripsPage = async () => {
  const trips = tripsSource.getPages();

  const publishedTrips = trips.filter(
    ({ data }) => data.status === "published"
  );

  const serializedTrips = serializeTrip(publishedTrips);

  return (
    <>
      <style>
        {`
          @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
        `}
      </style>

      <main>
        <TripMap data={serializedTrips} />
        <TripSidebar data={serializedTrips} />
      </main>
    </>
  );
};

export default TripsPage;
