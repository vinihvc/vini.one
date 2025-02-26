import { env } from '@/lib/env'
import Script from 'next/script'

export const UmamiTracking = () => {
  if (process.env.NODE_ENV !== 'production') return null

  return (
    <Script
      src="https://us.umami.is/script.js"
      data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      strategy="lazyOnload"
    />
  )
}
