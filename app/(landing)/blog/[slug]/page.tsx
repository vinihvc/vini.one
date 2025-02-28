import { allPosts } from '@/.contentlayer/generated'
import { BlurImage } from '@/components/ui/blur-image'
import { MDXComponents } from '@/components/ui/mdx-components'
import { SEO } from '@/config/seo'
import { createOgImage } from '@/utils/create-og-image'
import { notFound } from 'next/navigation'

interface BlogSlugPageProps {
  params: Promise<{
    slug: string
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

  if (!post) {
    notFound()
  }

  return {
    title: post?.title,
    description: post?.description,
    openGraph: {
      title: post?.title,
      description: post?.description,
      url: `${SEO.url}/blog/${post?.slug}`,
      images: [
        {
          url: createOgImage(post?.title),
          width: 1600,
          height: 836,
          alt: post?.title,
        },
      ],
    },
  }
}

const BlogSlugPage = async (props: BlogSlugPageProps) => {
  const { slug } = await props.params

  const post = allPosts.find(
    (post) => post.slug === slug && post.status === 'published',
  )

  if (!post) {
    notFound()
  }

  return (
    <MDXComponents className="selection:bg-rose-500" code={post.body.code}>
      <figure className="mb-10 grid gap-2">
        <BlurImage
          src={post.thumbnail.path}
          alt={post.thumbnail.alt}
          className="aspect-video rounded-md sm:scale-105"
          fill
        />

        <figcaption>{post.thumbnail.alt}</figcaption>
      </figure>
    </MDXComponents>
  )
}

export default BlogSlugPage
