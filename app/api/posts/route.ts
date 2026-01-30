import { NextResponse } from "next/server";
import { getAllPosts } from "@/lib/source";

export const GET = async () => {
	const posts = await getAllPosts();
	return NextResponse.json({ data: posts });
};
