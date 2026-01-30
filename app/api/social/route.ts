import { type NextRequest, NextResponse } from "next/server";
import { SOCIAL } from "@/content/static/social";

export const GET = async (request: NextRequest) => {
	const { searchParams } = new URL(request.url);

	const key = searchParams.get("key");

	const filteredSocial = key
		? SOCIAL.filter((social) => social.key === key)
		: SOCIAL;

	return NextResponse.json({ data: filteredSocial });
};
