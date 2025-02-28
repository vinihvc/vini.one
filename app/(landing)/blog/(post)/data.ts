export type FontSizeType = (typeof FONT_SIZES)[number]['value']
export type FontFamilyType = (typeof FONT_FAMILY)[number]['value']
export type ContainerWidthType = (typeof CONTAINER_WIDTHS)[number]['value']

export const DEFAULT_FONT_SIZE = '16'
export const DEFAULT_CONTAINER_WIDTH = '48rem'
export const DEFAULT_FONT_FAMILY = 'Outfit'

export const FONT_SIZES = [
  { name: 'Small', value: '14' },
  { name: 'Normal', value: '16' },
  { name: 'Large', value: '18' },
  { name: 'Huge', value: '20' },
] as const

export const FONT_FAMILY = [
  { name: 'Outfit', value: 'Outfit' },
  { name: 'sans-serif', value: 'sans-serif' },
  { name: 'serif', value: 'serif' },
  { name: 'monospace', value: 'monospace' },
] as const

export const CONTAINER_WIDTHS = [
  { name: 'Normal', value: '48rem' },
  { name: 'Wide', value: '64rem' },
  { name: 'Huge', value: '72rem' },
  { name: 'Gigantic', value: '80rem' },
  { name: 'Monster', value: '96rem' },
] as const
