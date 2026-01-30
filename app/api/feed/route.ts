import { SITE_CONFIG } from "@/config/site";
import { blogSource, tripsSource } from "@/lib/source";

export const dynamic = "force-static";

export const GET = () => {
  const blogPages = blogSource.getPages();
  const tripsPages = tripsSource.getPages();

  const publishedPosts = blogPages.filter(
    ({ data }) => data.status === "published"
  );

  const publishedTrips = tripsPages.filter(
    ({ data }) => data.status === "published"
  );

  const items = [
    ...publishedPosts.map((post) => ({
      title: post.data.title,
      link: `${SITE_CONFIG.url}/blog/${post.slugs[0]}`,
      description: post.data.description,
      date: post.data.publishedAt,
    })),
    ...publishedTrips.map((trip) => ({
      title: `${trip.data.city}, ${trip.data.country}`,
      link: `${SITE_CONFIG.url}/trips/${trip.slugs[0]}`,
      description: trip.data.description,
      date: trip.data.publishedAt,
    })),
  ];

  const orderedItems = items.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${SITE_CONFIG.name}</title>
  <link>${SITE_CONFIG.url}</link>
  <description>${SITE_CONFIG.description}</description>
  ${orderedItems
    .map(
      (item) => `
  <item>
    <title>${item.title}</title>
    <link>${item.link}</link>
    <description>${item.description}</description>
    <pubDate>${new Date(item.date).toISOString()}</pubDate>
  </item>
  `
    )
    .join("")}
</channel>
</rss>`,
    {
      headers: {
        "Content-Type": "text/xml",
      },
    }
  );
};
