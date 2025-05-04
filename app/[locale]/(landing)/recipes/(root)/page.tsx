import { FadeSection } from '@/components/ui/fade-section'
import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'
import { allRecipes } from 'contentlayer/generated'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { RecipeCard } from './_components/recipe-card'

export const metadata: Metadata = {
  title: 'Recipes',
  description: 'Recipes',
}

const RecipesPage = async () => {
  const t = await getTranslations('pages.recipes.section.heading')

  const publishedRecipes = allRecipes
    .filter((post) => post.status === 'published')
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )

  return (
    <div className="container selection:bg-rose-500">
      <FadeSection className="space-y-1">
        <Heading className="from-rose-500 to-fuchsia-500">{t('title')}</Heading>

        <h2 className="text-lg text-muted-foreground">{t('description')}</h2>
      </FadeSection>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {publishedRecipes.map((repo, index) => (
          <FadeSection key={repo.title} delay={(index + 1) * 0.05} blur asChild>
            <NavLink
              className="rounded-md ring-rose-500"
              href={`/recipes/${repo.slug}`}
            >
              <RecipeCard data={repo} />
            </NavLink>
          </FadeSection>
        ))}
      </div>
    </div>
  )
}

export default RecipesPage
