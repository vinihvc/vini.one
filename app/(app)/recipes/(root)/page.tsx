import type { Metadata } from "next";
import { FadeSection } from "@/components/ui/fade-section";
import { Heading } from "@/components/ui/heading";
import { NavLink } from "@/components/ui/nav-link";
import { SITE_CONFIG } from "@/config/site";
import { recipesSource } from "@/lib/source";
import { ogImage } from "@/utils/og-image";
import { RecipeCard } from "./_components/recipe-card";

export const metadata: Metadata = {
  title: "Recipes",
  openGraph: {
    title: "Recipes",
    url: `${SITE_CONFIG.url}/recipes`,
    images: [{ url: ogImage("Recipes"), width: 1200, height: 630 }],
  },
};

const RecipesPage = async () => {
  const recipes = recipesSource.getPages();

  const publishedRecipes = recipes.filter(
    ({ data }) => data.status === "published"
  );

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
          <FadeSection asChild blur delay={(index + 1) * 0.05} key={recipe.url}>
            <NavLink className="rounded-md ring-rose-500" href={recipe.url}>
              <RecipeCard data={recipe.data} />
            </NavLink>
          </FadeSection>
        ))}
      </div>
    </div>
  );
};

export default RecipesPage;
