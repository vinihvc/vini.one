import '@/styles/globals.css'
import { MediaQueriesIndicator } from '@/components/debug/media-queries'
import { Header } from '@/components/layout/header'
import { UmamiTracking } from '@/components/tracking/umami'
import { SEO } from '@/config/seo'
import { fontSans } from '@/lib/font'
import { createOgImage } from '@/utils/create-og-image'
import type { Metadata, Viewport } from 'next'
import React from 'react'

const BottomNavigation = React.lazy(
  () => import('@/components/layout/bottom-navigation'),
)

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0E0F0F',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: { default: SEO.name, template: `%s // ${SEO.name}` },
  description: SEO.description,
  applicationName: SEO.name,
  keywords: SEO.keywords,
  openGraph: {
    type: 'website',
    title: SEO.name,
    description: SEO.description,
    siteName: SEO.name,
    url: SEO.url,
    images: [
      {
        url: createOgImage(SEO.name),
        width: 1200,
        height: 630,
        alt: SEO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.name,
    description: SEO.description,
    images: [
      {
        url: createOgImage(SEO.name),
        width: 1200,
        height: 630,
      },
    ],
    creator: SEO.twitter,
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${SEO.url}/site.webmanifest`,
}

const RootLayout = async ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <Header />

        {children}

        <BottomNavigation />

        <MediaQueriesIndicator />

        <UmamiTracking />
      </body>
    </html>
  )
}

export default RootLayout
