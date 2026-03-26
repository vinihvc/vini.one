import { absoluteUrl } from "@/lib/url";

export const DEFAULT_FONT_SIZE = 64;

/**
 * Create an og:image URL with the title and font size
 *
 * ```ts
 * ogImage('Hello World') // https://www.vini.one/api/og?title=Hello%20World&fontSize=120
 * ```
 */
export const ogImage = (title: string, fontSize = DEFAULT_FONT_SIZE) => {
  return absoluteUrl(`/api/og?title=${title}&fontSize=${fontSize}`);
};
