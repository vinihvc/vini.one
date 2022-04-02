/* eslint-disable @typescript-eslint/no-var-requires */

// Environment type
const isProd = process.env.NODE_ENV === 'production'

//Compose Plugins
const withPlugins = require('next-compose-plugins')

// Generate PWA manifest
const withPWA = require('next-pwa')

// Bundle analyzer
const withBundleAnalyzer = require('@next/bundle-analyzer')

// Export config
module.exports = withPlugins([
  withBundleAnalyzer({
    enabled: process.env.ANALYZE === 'true',
  }),
  withPWA({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      disable: !isProd,
    },
    webpack: (config, { dev, isServer }) => {
      if (!dev && !isServer) {
        Object.assign(config.resolve.alias, {
          react: 'preact/compat',
          'react-dom/test-utils': 'preact/test-utils',
          'react-dom': 'preact/compat',
        })
      }

      return config
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
  }),
])
