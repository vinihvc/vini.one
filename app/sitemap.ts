import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/url";
import { blogSource, tripsSource } from "@/lib/source";

const sitemap = (): Promise<MetadataRoute.Sitemap> => {
  const pages = ["", "/projects", "/uses", "/bookshelf", "/blog", "/trips"];

  const postsPages = blogSource.getPages();
  const tripsPages = tripsSource.getPages();

  const publishedPosts = postsPages.filter(
    ({ data }) => data.status === "published"
  );

  const publishedTrips = tripsPages.filter(
    ({ data }) => data.status === "published"
  );

  const posts = publishedPosts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slugs[0]}`),
    lastModified: new Date(post.data.publishedAt).toISOString(),
  }));

  const trips = publishedTrips.map((trip) => ({
    url: absoluteUrl(`/trips/${trip.slugs[0]}`),
    lastModified: new Date(trip.data.publishedAt).toISOString(),
  }));

  return Promise.resolve([
    ...pages.map((page) => ({
      url: absoluteUrl(page ? page : "/"),
      lastModified: new Date().toISOString(),
    })),
    ...trips,
    ...posts,
  ]);
};

export default sitemap;
