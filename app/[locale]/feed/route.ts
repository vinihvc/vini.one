import { allPosts, allTrips } from '@/.contentlayer/generated'
import { SITE_CONFIG } from '@/config/site'

export const dynamic = 'force-static'

export const GET = async () => {
  const publishedPosts = allPosts.filter((post) => post.status === 'published')
  const publishedTrips = allTrips.filter((trip) => trip.status === 'published')

  const items = [
    ...publishedPosts.map((post) => ({
      title: post.title,
      link: `${SITE_CONFIG.url}/blog/${post.slug}`,
      description: post.description,
      date: post.publishedAt,
    })),
    ...publishedTrips.map((trip) => ({
      title: `${trip.city}, ${trip.country}`,
      link: `${SITE_CONFIG.url}/trips/${trip.slug}`,
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
