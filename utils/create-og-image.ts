import { SITE_CONFIG } from '@/config/site'

export const DEFAULT_FONT_SIZE = 110

/**
 * Create an og:image URL with the title and font size
 *
 * ```ts
 * createOgImage('Hello World') // https://www.vini.one/api/og?title=Hello%20World&fontSize=120
 * ```
 */
export const createOgImage = (title: string, fontSize = DEFAULT_FONT_SIZE) => {
  return `${SITE_CONFIG.url}/api/og?title=${title}&fontSize=${fontSize}`
}
