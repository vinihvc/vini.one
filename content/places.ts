import type { PlaceType } from '@/types/places'

export const PLACES: PlaceType[] = [
  {
    slug: 'eiffel-tower',
    name: 'Eiffel Tower',
    location: {
      latitude: 48.8584,
      longitude: 2.2945,
    },
    thumbnails: [
      'https://images.unsplash.com/photo-1431274172761-fca41d930114',
      'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f',
    ],
  },
  {
    slug: 'statue-of-liberty',
    name: 'Statue of Liberty',
    location: {
      latitude: 40.6892,
      longitude: -74.0445,
    },
    thumbnails: [
      'https://images.unsplash.com/photo-1588384153148-ebd739ac430c',
      'https://images.unsplash.com/photo-1628353900470-0bd683a6946a',
    ],
  },
  {
    slug: 'taj-mahal',
    name: 'Taj Mahal',
    location: {
      latitude: 27.1751,
      longitude: 78.0421,
    },
    thumbnails: [
      'https://images.unsplash.com/photo-1548013146-72479768bada',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523',
    ],
  },
  {
    slug: 'machu-picchu',
    name: 'Machu Picchu',
    location: {
      latitude: -13.1631,
      longitude: -72.545,
    },
    thumbnails: [
      'https://images.unsplash.com/photo-1587595431973-160d0d94add1',
      'https://images.unsplash.com/photo-1526392060635-9d6019884377',
    ],
  },
]
