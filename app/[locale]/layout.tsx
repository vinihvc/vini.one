import '@/styles/globals.css'
import { MediaQueriesIndicator } from '@/components/debug/media-queries'
import { Header } from '@/components/layout/header'
import { UmamiTracking } from '@/components/tracking/umami'
import { SITE_CONFIG } from '@/config/site'
import { routing } from '@/i18n/routing'
import { fontSans } from '@/lib/font'
import { createOgImage } from '@/utils/create-og-image'
import type { Metadata, Viewport } from 'next'
import { hasLocale } from 'next-intl'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
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

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('metadata')

  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: { default: SITE_CONFIG.name, template: `%s // ${SITE_CONFIG.name}` },
    description: t('description'),
    applicationName: SITE_CONFIG.name,
    keywords: SITE_CONFIG.keywords,
    openGraph: {
      type: 'website',
      title: SITE_CONFIG.name,
      description: t('description'),
      siteName: SITE_CONFIG.name,
      url: SITE_CONFIG.url,
      images: [
        {
          url: createOgImage(SITE_CONFIG.name),
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SITE_CONFIG.name,
      description: t('description'),
      images: [
        {
          url: createOgImage(SITE_CONFIG.name),
          width: 1200,
          height: 630,
        },
      ],
      creator: SITE_CONFIG.twitter,
    },
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon-16x16.png',
      apple: '/apple-touch-icon.png',
    },
    manifest: `${SITE_CONFIG.url}/site.webmanifest`,
  }
}

interface LocaleLayoutProps extends React.PropsWithChildren {
  /**
   * The locale of the page.
   */
  params: Promise<{ locale: (typeof routing.locales)[number] }>
}

const LocaleLayout = async ({ params, children }: LocaleLayoutProps) => {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  setRequestLocale(locale)

  return (
    <html lang={locale} suppressHydrationWarning>
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

export default LocaleLayout
