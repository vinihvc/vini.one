import { NextResponse } from "next/server";
import { getAllTrips } from "@/lib/source";

export const GET = async () => {
	const trips = await getAllTrips();
	return NextResponse.json({ data: trips });
};
