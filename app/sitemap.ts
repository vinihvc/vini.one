import { allPosts, allTrips } from '@/.contentlayer/generated'
import { SEO } from '@/config/seo'
import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  const pages = ['', '/projects', '/uses', '/bookshelf', '/blog', '/trips']

  const publishedPosts = allPosts.filter((post) => post.status === 'published')
  const publishedTrips = allTrips.filter((trip) => trip.status === 'published')

  const posts = publishedPosts.map((post) => ({
    url: `${SEO.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt).toISOString(),
  }))

  const trips = publishedTrips.map((trip) => ({
    url: `${SEO.url}/trips/${trip.slug}`,
    lastModified: new Date(trip.updatedAt ?? trip.publishedAt).toISOString(),
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
