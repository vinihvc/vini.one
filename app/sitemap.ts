import { allPosts, allTrips } from '@/.contentlayer/generated'
import { SITE_CONFIG } from '@/config/site'
import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  const pages = ['', '/projects', '/uses', '/bookshelf', '/blog', '/trips']

  const publishedPosts = allPosts.filter((post) => post.status === 'published')
  const publishedTrips = allTrips.filter((trip) => trip.status === 'published')

  const posts = publishedPosts.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt).toISOString(),
  }))

  const trips = publishedTrips.map((trip) => ({
    url: `${SITE_CONFIG.url}/trips/${trip.slug}`,
    lastModified: new Date(trip.updatedAt ?? trip.publishedAt).toISOString(),
  }))

  return [
    ...pages.map((page) => ({
      url: `${SITE_CONFIG.url}${page}`,
      lastModified: new Date().toISOString(),
    })),
    ...trips,
    ...posts,
  ]
}

export default sitemap
