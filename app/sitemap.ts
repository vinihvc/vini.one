import { SEO } from '@/config/seo'
import { POSTS } from '@/content/posts'
import { TRIPS } from '@/content/trips'
import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
  const pages = ['', '/projects', '/uses', '/bookshelf', '/blog', '/trips']

  const trips = TRIPS.map((trip) => ({
    url: `${SEO.url}/trips/${trip.slug}`,
    lastModified: new Date(trip.updatedAt ?? trip.createdAt).toISOString(),
  }))

  const posts = POSTS.map((post) => ({
    url: `${SEO.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.createdAt).toISOString(),
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
