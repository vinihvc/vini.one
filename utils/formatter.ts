/**
 * Format date to YYYY
 *
 * ```ts
 * formatDate('2021-01-01') // 2021
 * ```
 */
export const formatDate = (
  date: string,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  },
  locale = 'en-US',
) => {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date))
}

/**
 * Pluralize a word
 *
 * ```ts
 * pluralize('cat', 1) // cat
 * pluralize('cat', 2) // cats
 * ```
 */
export const pluralize = (word: string, count: number) => {
  return `${word}${count > 1 ? 's' : ''}`
}
