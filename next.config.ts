import type { NextConfig } from 'next'
import { withContentlayer } from 'next-contentlayer2'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  async redirects() {
    return [
      {
        source: '/rss',
        destination: '/rss.xml',
        permanent: true,
      },
      {
        source: '/github',
        destination: 'https://github.com/vinihvc',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/vinihvc',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://www.linkedin.com/in/vinihvc',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/vinihvc',
        permanent: true,
      },
    ]
  },
}

export default withContentlayer(nextConfig)
