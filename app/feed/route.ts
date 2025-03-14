import { allPosts, allTrips } from '@/.contentlayer/generated'
import { SEO } from '@/config/seo'

export const dynamic = 'force-static'

export const GET = async () => {
  const publishedPosts = allPosts.filter((post) => post.status === 'published')
  const publishedTrips = allTrips.filter((trip) => trip.status === 'published')

  const items = [
    ...publishedPosts.map((post) => ({
      title: post.title,
      link: `${SEO.url}/blog/${post.slug}`,
      description: post.description,
      date: post.publishedAt,
    })),
    ...publishedTrips.map((trip) => ({
      title: `${trip.city}, ${trip.country}`,
      link: `${SEO.url}/trips/${trip.slug}`,
      description: trip.description,
      date: trip.publishedAt,
    })),
  ]

  const orderedItems = items.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })

  return new Response(
    `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>${SEO.name}</title>
  <link>${SEO.url}</link>
  <description>${SEO.description}</description>
  ${orderedItems
    .map(
      (item) => `
  <item>
    <title>${item.title}</title>
    <link>${item.link}</link>
    <description>${item.description}</description>
    <pubDate>${new Date(item.date).toISOString()}</pubDate>
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
