import { NextResponse } from "next/server";
import { COMPANIES } from "@/content/static/companies";

export const GET = async () => {
	return NextResponse.json({ data: COMPANIES });
};
