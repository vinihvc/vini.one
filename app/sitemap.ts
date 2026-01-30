import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";
import { getAllPosts, getAllTrips } from "@/lib/source";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const pages = ["", "/projects", "/uses", "/bookshelf", "/blog", "/trips"];

	const publishedPosts = await getAllPosts();
	const publishedTrips = await getAllTrips();

	const posts = publishedPosts.map((post) => ({
		url: `${SITE_CONFIG.url}/blog/${post.slug}`,
		lastModified: new Date(post.updatedAt ?? post.publishedAt).toISOString(),
	}));

	const trips = publishedTrips.map((trip) => ({
		url: `${SITE_CONFIG.url}/trips/${trip.slug}`,
		lastModified: new Date(trip.updatedAt ?? trip.publishedAt).toISOString(),
	}));

	return [
		...pages.map((page) => ({
			url: `${SITE_CONFIG.url}${page}`,
			lastModified: new Date().toISOString(),
		})),
		...trips,
		...posts,
	];
}
