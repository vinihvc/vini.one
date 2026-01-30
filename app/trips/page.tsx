import dynamic from "next/dynamic";
import { tripsSource } from "@/lib/source";
import { TripMap } from "./_components/map";

const TripSidebar = dynamic(() => import("./_components/sidebar"));

const TripsPage = async () => {
  const trips = tripsSource.getPages();

  const publishedTrips = trips.filter(
    ({ data }) => data.status === "published"
  );

  return (
    <>
      <TripMap data={publishedTrips} />

      <TripSidebar data={publishedTrips} />
    </>
  );
};

export default TripsPage;
