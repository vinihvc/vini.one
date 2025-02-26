import { SEO } from '@/config/seo'
import { POSTS } from '@/content/posts'
import { TRIPS } from '@/content/trips'

export const GET = async () => {
  const items = [
    ...POSTS.map((post) => ({
      title: post.title,
      link: `${SEO.url}/blog/${post.slug}`,
      description: post.description,
      date: post.createdAt,
    })),
    ...TRIPS.map((trip) => ({
      title: `${trip.city}, ${trip.country}`,
      link: `${SEO.url}/trips/${trip.slug}`,
      description: trip.description,
      date: trip.createdAt,
    })),
  ]

  const orderedItems = items.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${SEO.title}</title>
  <link>${SEO.url}</link>
  <description>${SEO.description}</description>
  ${orderedItems
    .map(
      (item) => `
  <item>
    <title>${item.title}</title>
    <link>${item.link}</link>
    <description>${item.description}</description>
    <pubDate>${new Date(item.date).toUTCString()}</pubDate>
  </item>
  `,
    )
    .join('')}
</channel>
</rss>`,
    {
      headers: {
        'Content-Type': 'text/xml',
      },
    },
  )
}
