import { NextResponse } from "next/server";
import { bookshelfSource } from "@/lib/source";
import { serializeBookshelf } from "@/utils/serializer";

export const dynamic = "force-static";

export const GET = () => {
  const books = bookshelfSource.getPages();

  const serializedBooks = serializeBookshelf(books);

  return NextResponse.json({ data: serializedBooks });
};
