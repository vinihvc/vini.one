export type ProjectType = (typeof PROJECTS)[number]

export const PROJECTS = [
  {
    key: 'eletrohits',
    title: 'Eletrohits',
    description: 'A streaming music app',
    url: 'https://github.com/vinihvc/eletrohits',
    website: 'https://eletrohits.vini.one',
  },
  {
    key: 'os',
    title: 'Vini OS',
    description: 'A simple operating system',
    url: 'https://github.com/vinihvc/vini-os',
    website: 'https://os.vini.one',
  },
  {
    key: 'books',
    title: 'Books',
    description: 'Find books using Google Books API',
    url: 'https://github.com/vinihvc/challenge-books',
    website: 'https://books.vini.one',
  },
  {
    key: 'clock',
    title: 'Gradient Clock',
    description: 'Beautiful gradient clock',
    url: 'https://github.com/vinihvc/gradient-clock',
    website: 'https://clock.vini.one',
  },
  {
    key: 'adventure',
    title: 'Adventure',
    description: 'Idle game with a lot of adventures',
    url: 'https://github.com/vinihvc/adventure',
    website: 'https://adventure.vini.one',
  },
  {
    key: 'optimizer',
    title: 'Optimizer',
    description: 'Easy image optimizer and converter',
    url: 'https://github.com/vinihvc/optimizer',
    website: 'https://optimizer.vini.one',
  },
  {
    key: 'date',
    title: 'Date Formatter',
    description: 'A date formatter using Intl API',
    url: 'https://github.com/vinihvc/date',
    website: 'https://date.vini.one',
  },
  {
    key: 'fit',
    title: 'Fit app',
    description: 'Nutritional facts app',
    url: 'https://github.com/vinihvc/fit',
    website: 'https://fit.vini.one',
  },
] as const
