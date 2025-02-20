import '@/styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { createOgImage } from '@/utils/create-og-image'

import { SEO } from '@/config/seo'
import { fontMono, fontSans } from '@/lib/font'
import { MediaQueriesIndicator } from '@/components/debug/media-queries'
import { ReactScan } from '@/components/debug/react-scan'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { NoiseBg } from '@/components/layout/noise-bg'
import { UmamiTracking } from '@/components/tracking/umami'

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
      <body className={`${fontSans.variable} ${fontMono.variable}`}>
        <Header />

        <NoiseBg />

        <main className="flex flex-1 flex-col pt-16 md:my-10">{children}</main>

        <Footer />

        <MediaQueriesIndicator />
        <ReactScan />

        <UmamiTracking />
      </body>
    </html>
  )
}

export default RootLayout
