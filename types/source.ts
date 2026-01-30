export interface TripItem {
	slug: string
	title: string
	city: string
	country: string
	description: string
	location: { latitude: number; longitude: number }
	thumbnail: { path: string; alt: string }
	photos: string[]
	arrivalDate: string
	departureDate: string
	publishedAt: string
	updatedAt?: string
	status: string
}
