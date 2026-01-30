import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx/mdx-content";
import { SITE_CONFIG } from "@/config/site";
import { getAllRecipes, getRecipe } from "@/lib/source";
import { ogImage } from "@/utils/og-image";

interface RecipeSlugPageProps {
	params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
	const recipes = await getAllRecipes();
	return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata(props: RecipeSlugPageProps) {
	const { slug } = await props.params;
	const page = getRecipe(slug);
	if (!page || page.data.status !== "published") notFound();

	return {
		title: page.data.title,
		description: page.data.description,
		openGraph: {
			title: page.data.title,
			description: page.data.description,
			url: `${SITE_CONFIG.url}/recipes/${slug}`,
			images: [
				{
					url: ogImage(page.data.title),
					width: 1200,
					height: 630,
					alt: page.data.title,
				},
			],
		},
	};
}

export default async function RecipeSlugPage(props: RecipeSlugPageProps) {
	const { slug } = await props.params;
	const page = getRecipe(slug);
	if (!page || page.data.status !== "published") notFound();

	const rawContent =
		typeof page.data.getText === "function"
			? await page.data.getText("processed")
			: undefined;

	return (
		<MDXContent
			data={{
				title: page.data.title,
				description: page.data.description,
				publishedAt: page.data.publishedAt,
				thumbnail: page.data.thumbnail,
				body: page.data.body,
				rawContent,
			}}
		/>
	);
}
