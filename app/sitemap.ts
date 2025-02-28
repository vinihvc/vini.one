import { allPosts, allTrips } from '@/.contentlayer/generated'
import { SEO } from '@/config/seo'
import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  const pages = ['', '/projects', '/uses', '/bookshelf', '/blog', '/trips']

  const trips = allTrips.map((trip) => ({
    url: `${SEO.url}/trips/${trip.slug}`,
    lastModified: new Date(trip.updatedAt ?? trip.publishedAt).toISOString(),
  }))

  const posts = allPosts.map((post) => ({
    url: `${SEO.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt).toISOString(),
  }))

  return [
    ...pages.map((page) => ({
      url: `${SEO.url}${page}`,
      lastModified: new Date().toISOString(),
    })),
    ...trips,
    ...posts,
  ]
}

export default sitemap
