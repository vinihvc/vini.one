import { allPosts } from '@/.contentlayer/generated'
import { BlurImage } from '@/components/ui/blur-image'
import { MDXComponents } from '@/components/ui/mdx-components'
import { SEO } from '@/config/seo'
import { createOgImage } from '@/utils/create-og-image'
import { formatDate, readTime } from '@/utils/formatter'
import { Calendar } from 'lucide-react'
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
    <div className="prose-invert prose container relative prose-hr:my-4 prose-img:my-0 text-muted-foreground prose-a:no-underline selection:bg-rose-500">
      <header>
        <h1 className="mb-2">{post.title}</h1>

        <p className="!my-0 text-foreground text-lg opacity-90">
          {post.description}
        </p>

        <hr className="border-0 border-t" />

        <div className="flex justify-between">
          <time
            dateTime={post.publishedAt}
            className="flex items-center gap-2 text-base text-muted-foreground"
          >
            <Calendar className="h-4 w-4" />

            {formatDate(post.publishedAt, {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}
          </time>

          <div>{readTime(post.body.code)}</div>
        </div>
      </header>

      <figure>
        <BlurImage
          src={post.thumbnail.path}
          alt={post.thumbnail.alt}
          className="aspect-square rounded-md"
          fill
        />

        <figcaption>{post.thumbnail.alt}</figcaption>
      </figure>

      <MDXComponents content={post.body.code} />
    </div>
  )
}

export default BlogSlugPage
