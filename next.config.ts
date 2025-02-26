import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
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

const withMDX = createMDX({})

export default withMDX(nextConfig)
