import type { TripType } from '@/types/trip'

export const TRIPS: TripType[] = [
  {
    slug: 'rio-de-janeiro-brasil',
    title: 'Rio de Janeiro',
    description: 'Visitando a cidade maravilhosa',
    location: {
      latitude: -22.9068,
      longitude: -43.1729,
    },
    thumbnails: [
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325',
      'https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f',
    ],
    arrivalDate: '2024-07-21',
    departureDate: '2024-07-30',
    createdAt: '2024-07-21',
    updatedAt: '2024-07-30',
  },
]
