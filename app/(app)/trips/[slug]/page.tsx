import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx/mdx-content";
import { SITE_CONFIG } from "@/config/site";
import { getAllTrips, getTrip } from "@/lib/source";
import { ogImage } from "@/utils/og-image";

interface TripsSlugPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const trips = await getAllTrips();
	return trips.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(props: TripsSlugPageProps) {
	const { slug } = await props.params;
	const page = getTrip(slug);
	if (!page || page.data.status !== "published") notFound();
	const title = `${page.data.city}, ${page.data.country}`;

	return {
		title,
		description: page.data.description,
		openGraph: {
			title,
			description: page.data.description,
			url: `${SITE_CONFIG.url}/trips/${slug}`,
			images: [
				{
					url: ogImage(title),
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
	};
}

export default async function TripsSlugPage(props: TripsSlugPageProps) {
	const { slug } = await props.params;
	const page = getTrip(slug);
	if (!page || page.data.status !== "published") notFound();

	const rawContent =
		typeof page.data.getText === "function"
			? await page.data.getText("processed")
			: undefined;
	const title = `${page.data.city}, ${page.data.country}`;

	return (
		<MDXContent
			data={{
				title,
				description: page.data.description,
				publishedAt: page.data.publishedAt,
				thumbnail: page.data.thumbnail,
				body: page.data.body,
				rawContent,
			}}
		/>
	);
}
