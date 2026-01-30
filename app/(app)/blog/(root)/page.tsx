import type { Metadata } from "next";
import { FadeSection } from "@/components/ui/fade-section";
import { Heading } from "@/components/ui/heading";
import { NavLink } from "@/components/ui/nav-link";
import { SITE_CONFIG } from "@/config/site";
import { blogSource } from "@/lib/source";
import { ogImage } from "@/utils/og-image";
import { PostCard } from "./_components/post-card";

export const metadata: Metadata = {
  title: "Blog",
  openGraph: {
    title: "Blog",
    url: `${SITE_CONFIG.url}/blog`,
    images: [{ url: ogImage("Blog"), width: 1200, height: 630 }],
  },
};

const BlogPage = async () => {
  const posts = blogSource.getPages();

  const publishedPosts = posts.filter(
    (post) => post.data.status === "published"
  );

  return (
    <div className="container selection:bg-rose-500">
      <FadeSection className="space-y-1">
        <Heading className="from-rose-500 to-fuchsia-500">Blog</Heading>

        <h2 className="text-lg text-muted-foreground">
          Writing about things that interest me.
        </h2>
      </FadeSection>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {publishedPosts.map((post) => (
          <NavLink
            className="rounded-md ring-rose-500"
            href={`/blog/${post.slugs[0]}`}
            key={post.data.title}
          >
            <PostCard data={post.data} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
