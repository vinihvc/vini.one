import { NextResponse } from "next/server";
import { tripsSource } from "@/lib/source";
import { serializeTrip } from "@/utils/serializer";

export const GET = () => {
  const trips = tripsSource.getPages();

  const publishedTrips = trips.filter(
    ({ data }) => data.status === "published"
  );

  const serializedTrips = serializeTrip(publishedTrips);

  return NextResponse.json({ data: serializedTrips });
};
