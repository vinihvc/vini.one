import type { Metadata } from "next";
import { FadeSection } from "@/components/ui/fade-section";
import { Heading } from "@/components/ui/heading";
import { NavLink } from "@/components/ui/nav-link";
import { getAllRecipes } from "@/lib/source";
import { RecipeCard } from "./_components/recipe-card";

export const metadata: Metadata = {
	title: "Recipes",
	description: "Recipes",
};

const RecipesPage = async () => {
	const publishedRecipes = await getAllRecipes();

	return (
		<div className="container selection:bg-rose-500">
			<FadeSection className="space-y-1">
				<Heading className="from-rose-500 to-fuchsia-500">Recipes</Heading>

				<h2 className="text-lg text-muted-foreground">
					My public recipe book.
				</h2>
			</FadeSection>

			<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
				{publishedRecipes.map((recipe, index) => (
					<FadeSection
						key={recipe.title}
						delay={(index + 1) * 0.05}
						blur
						asChild
					>
						<NavLink
							className="rounded-md ring-rose-500"
							href={`/recipes/${recipe.slug}`}
						>
							<RecipeCard data={recipe} />
						</NavLink>
					</FadeSection>
				))}
			</div>
		</div>
	);
};

export default RecipesPage;
