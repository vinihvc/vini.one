export type TravelType = {
  /**
   * The country of the travel
   */
  country: string
  /**
   * The city of the travel
   */
  city: string
  /**
   * The location of the travel
   */
  location: {
    latitude: number
    longitude: number
  }
  /**
   * The country code of the travel
   */
  countryCode: string
  /**
   * The arrival date of the travel
   */
  arrivalDate: string
  /**
   * The departure date of the travel
   */
  departureDate: string
}
