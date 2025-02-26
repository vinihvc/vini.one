import { SEO } from '@/config/seo'

import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SEO.url}/sitemap.xml`,
  }
}

export default robots
