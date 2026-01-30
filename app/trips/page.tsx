import dynamic from "next/dynamic";
import { getAllTrips } from "@/lib/source";
import { TripMap } from "./_components/map";

const TripSidebar = dynamic(() => import("./_components/sidebar"));

export default async function TripsPage() {
	const publishedTrips = await getAllTrips();

	return (
		<>
			<TripMap data={publishedTrips} />

			<TripSidebar
				data={publishedTrips}
				translations={{
					open: "Open trips list",
					title: "Trips",
					description: "Some places I've visited",
					close: "Close trips list",
				}}
			/>
		</>
	);
}
