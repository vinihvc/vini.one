import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'
import { getPosts } from '@/services/requests'
import type { Metadata } from 'next'
import { PostCard } from './_components/post-card'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog',
}

const BlogPage = async () => {
  const data = await getPosts()

  return (
    <div className="container selection:bg-amber-500">
      <div className="space-y-1">
        <Heading className="from-rose-500 to-fuchsia-500">Blog</Heading>

        <h2 className="text-lg text-muted-foreground">
          Writing about my experiences and thoughts.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {data.map((repo) => (
          <NavLink
            key={repo.title}
            className="rounded-md ring-rose-500"
            href={`/blog/${repo.slug}`}
          >
            <PostCard data={repo} />
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default BlogPage
