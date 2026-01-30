import dynamic from "next/dynamic";
import { tripsSource } from "@/lib/source";
import { serializeTrip } from "@/utils/serializer";
import { TripMap } from "./_components/map";

const TripSidebar = dynamic(() => import("./_components/sidebar"));

const TripsPage = async () => {
  const trips = tripsSource.getPages();

  const publishedTrips = trips.filter(
    ({ data }) => data.status === "published"
  );

  const serializedTrips = serializeTrip(publishedTrips);

  return (
    <>
      <TripMap data={serializedTrips} />
      <TripSidebar data={serializedTrips} />
    </>
  );
};

export default TripsPage;
