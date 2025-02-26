import '@/styles/globals.css'

import { createOgImage } from '@/utils/create-og-image'
import type { Metadata, Viewport } from 'next'

import { MediaQueriesIndicator } from '@/components/debug/media-queries'
import { Header } from '@/components/layout/header'
import { UmamiTracking } from '@/components/tracking/umami'
import { SEO } from '@/config/seo'
import { fontSans } from '@/lib/font'

export const viewport: Viewport = {
  themeColor: '#0E0F0F',
}

export const metadata: Metadata = {
  metadataBase: new URL(SEO.url),
  title: { default: SEO.title, template: `%s // ${SEO.title}` },
  applicationName: SEO.title,
  keywords: SEO.keywords,
  openGraph: {
    title: SEO.title,
    siteName: SEO.title,
    type: 'website',
    url: SEO.url,
    images: [
      {
        url: createOgImage(SEO.title),
        width: 1600,
        height: 836,
        alt: 'Vinicius Vicentini',
      },
    ],
  },
  twitter: {
    creator: SEO.twitter,
    card: 'summary_large_image',
  },
}

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontSans.variable}>
        <Header />

        {children}

        <MediaQueriesIndicator />

        <UmamiTracking />
      </body>
    </html>
  )
}

export default RootLayout
