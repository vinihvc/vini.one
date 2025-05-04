import { allPosts, allRecipes } from '@/.contentlayer/generated'
import { MDXContent } from '@/components/mdx/mdx-content'
import { SITE_CONFIG } from '@/config/site'
import { createOgImage } from '@/utils/create-og-image'
import type { Locale } from 'next-intl'
import { notFound } from 'next/navigation'

interface RecipeSlugPageProps {
  params: Promise<{
    slug: string
    locale: Locale
  }>
}

export const generateStaticParams = async () => {
  const posts = allPosts.filter((post) => post.status === 'published')

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export const generateMetadata = async (props: RecipeSlugPageProps) => {
  const { slug } = await props.params

  const recipe = allRecipes.find(
    (recipe) => recipe.slug === slug && recipe.status === 'published',
  )

  if (!recipe) notFound()

  return {
    title: recipe?.title,
    description: recipe?.description,
    openGraph: {
      title: recipe?.title,
      description: recipe?.description,
      url: `${SITE_CONFIG.url}/recipes/${recipe?.slug}`,
      images: [
        {
          url: createOgImage(recipe?.title),
          width: 1200,
          height: 630,
          alt: recipe?.title,
        },
      ],
    },
  }
}

const RecipeSlugPage = async (props: RecipeSlugPageProps) => {
  const { slug, locale } = await props.params

  const recipe = allRecipes.find(
    (recipe) => recipe.slug === slug && recipe.status === 'published',
  )

  if (!recipe) {
    notFound()
  }

  return (
    <MDXContent
      locale={locale}
      data={{
        title: recipe.title,
        description: recipe.description,
        publishedAt: recipe.publishedAt,
        thumbnail: recipe.thumbnail,
        content: recipe.body.code,
      }}
    />
  )
}

export default RecipeSlugPage
