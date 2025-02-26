import type { TimestampType } from '@/types/timestamp'

export type TripType = {
  /**
   * The slug of the trip
   */
  slug: string
  /**
   * The name of the trip
   */
  title: string
  /**
   * The description of the trip
   */
  description: string
  /**
   * The location of the trip
   */
  location: {
    /**
     * The latitude of the trip
     */
    latitude: number
    /**
     * The longitude of the trip
     */
    longitude: number
  }
  /**
   * The thumbnails of the trip
   */
  thumbnails: string[]
  /**
   * The arrival date of the trip
   */
  arrivalDate: string
  /**
   * The departure date of the trip
   */
  departureDate?: string
} & TimestampType
