import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
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
    url: `${SITE_CONFIG.url}/blog/${post.slugs[0]}`,
    lastModified: new Date(post.data.publishedAt).toISOString(),
  }));

  const trips = publishedTrips.map((trip) => ({
    url: `${SITE_CONFIG.url}/trips/${trip.slugs[0]}`,
    lastModified: new Date(trip.data.publishedAt).toISOString(),
  }));

  return Promise.resolve([
    ...pages.map((page) => ({
      url: `${SITE_CONFIG.url}${page}`,
      lastModified: new Date().toISOString(),
    })),
    ...trips,
    ...posts,
  ]);
};

export default sitemap;
