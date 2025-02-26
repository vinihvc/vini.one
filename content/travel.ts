import type { TravelType } from '@/types/travel'

export const TRAVEL: TravelType[] = [
  // went 20/03/2025
  {
    country: 'Mexico',
    city: 'San Luis Potosí',
    location: {
      latitude: 22.152583,
      longitude: -100.987544,
    },
    countryCode: 'mx',
    arrivalDate: '20/03/2025',
    departureDate: '20/03/2025',
  },
  // went 02/04/2024
  {
    country: 'Brazil',
    city: 'Ribeirão Preto',
    location: {
      latitude: -21.183333,
      longitude: -47.816667,
    },
    countryCode: 'br',
    arrivalDate: '02/04/2024',
    departureDate: '02/04/2024',
  },
  // went 09/03/2024 - 02/04/2024
  {
    country: 'Ireland',
    city: 'Dublin',
    location: {
      latitude: 53.349805,
      longitude: -6.26031,
    },
    countryCode: 'ie',
    arrivalDate: '09/03/2024',
    departureDate: '02/04/2024',
  },
  // went 19/01/2024 - 09/03/2024
  {
    country: 'Italy',
    city: 'Bova Marina',
    location: {
      latitude: 37.9305,
      longitude: 15.9203,
    },
    countryCode: 'it',
    arrivalDate: '19/01/2024',
    departureDate: '09/03/2024',
  },
  // went 02/04/2023 - 19/01/2024
  {
    country: 'Ireland',
    city: 'Dublin',
    location: {
      latitude: 53.349805,
      longitude: -6.26031,
    },
    countryCode: 'ie',
    arrivalDate: '02/04/2023',
    departureDate: '19/01/2024',
  },
  // origin
  {
    country: 'Brazil',
    city: 'Ribeirão Preto',
    location: {
      latitude: -21.183333,
      longitude: -47.816667,
    },
    countryCode: 'br',
    arrivalDate: '02/04/2023',
    departureDate: '19/01/2024',
  },
]
