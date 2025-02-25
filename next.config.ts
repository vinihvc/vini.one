import withPlaiceholder from '@plaiceholder/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
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

export default withPlaiceholder(nextConfig)
