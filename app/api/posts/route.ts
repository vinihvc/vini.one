import { NextResponse } from "next/server";
import { blogSource } from "@/lib/source";
import { serializeBlog } from "@/utils/serializer";

export const dynamic = "force-static";

export const GET = () => {
  const posts = blogSource.getPages();

  const publishedPosts = posts.filter(
    ({ data }) => data.status === "published"
  );

  const serializedPosts = serializeBlog(publishedPosts);

  return NextResponse.json({ data: serializedPosts });
};
