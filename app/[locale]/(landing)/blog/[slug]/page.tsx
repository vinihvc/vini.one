import { allPosts } from '@/.contentlayer/generated'
import { MDXContent } from '@/components/mdx/mdx-content'
import { SITE_CONFIG } from '@/config/site'
import { getImageFromFolder } from '@/lib/cloudinary'
import { createOgImage } from '@/utils/create-og-image'
import type { Locale } from 'next-intl'
import { notFound } from 'next/navigation'

interface BlogSlugPageProps {
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

export const generateMetadata = async (props: BlogSlugPageProps) => {
  const { slug } = await props.params

  const post = allPosts.find(
    (post) => post.slug === slug && post.status === 'published',
  )

  if (!post) notFound()

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      url: `${SITE_CONFIG.url}/blog/${post?.slug}`,
      images: [
        {
          url: createOgImage(post?.title),
          width: 1200,
          height: 630,
          alt: post?.title,
        },
      ],
    },
  }
}

const BlogSlugPage = async (props: BlogSlugPageProps) => {
  const { slug, locale } = await props.params

  const post = allPosts.find(
    (post) => post.slug === slug && post.status === 'published',
  )

  const photos = await getImageFromFolder(`vini.one/posts/${post?.slug}`)

  if (!post) {
    notFound()
  }

  return (
    <MDXContent
      locale={locale}
      data={{
        title: post.title,
        description: post.description,
        publishedAt: post.publishedAt,
        thumbnail: post.thumbnail,
        content: post.body.code,
        photos,
      }}
    />
  )
}

export default BlogSlugPage
