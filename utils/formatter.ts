/**
 * Format date to YYYY
 *
 * ```ts
 * formatDate('2021-01-01') // 2021
 * ```
 */
export const formatDate = (
  date: string | Date,
  options: Intl.DateTimeFormatOptions
) => {
  return new Intl.DateTimeFormat("pt-BR", options).format(new Date(date));
};

/**
 * Pluralize a word
 *
 * ```ts
 * pluralize('cat', 1) // cat
 * pluralize('cat', 2) // cats
 * ```
 */
export const pluralize = (word: string, count: number) => {
  return `${word}${count > 1 ? "s" : ""}`;
};

/**
 * Slugify a string
 *
 * ```ts
 * slugify('Hello World') // hello-world
 * ```
 */
export const slugify = (text: string) => {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};

const NO_OF_WORDS_REGEX = /\s+/g;

export const readTime = (text: string) => {
  const wordsPerMinute = 200;
  const noOfWords = text.split(NO_OF_WORDS_REGEX).length;
  const minutes = Math.ceil(noOfWords / wordsPerMinute);

  return minutes;
};
