import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx/mdx-content";
import { SITE_CONFIG } from "@/config/site";
import { blogSource } from "@/lib/source";
import { ogImage } from "@/utils/og-image";

export const generateStaticParams = () => {
  const posts = blogSource.getPages();

  const publishedPosts = posts.filter(
    ({ data }) => data.status === "published"
  );

  return publishedPosts.map((post) => ({ slug: post.slugs[0] }));
};

export const generateMetadata = async (props: PageProps<"/blog/[slug]">) => {
  const { slug } = await props.params;

  const page = blogSource.getPage([slug]);

  const isPublished = page?.data.status === "published";

  if (!(page && isPublished)) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description,
      url: `${SITE_CONFIG.url}/blog/${slug}`,
      images: [{ url: ogImage(page.data.title), width: 1200, height: 630 }],
    },
  };
};

const BlogSlugPage = async (props: PageProps<"/blog/[slug]">) => {
  const { slug } = await props.params;

  const page = blogSource.getPage([slug]);

  const isPublished = page?.data.status === "published";

  if (!(page && isPublished)) {
    notFound();
  }

  const rawContent = await page.data.getText("raw");

  return (
    <MDXContent
      data={{
        title: page.data.title,
        description: page.data.description,
        publishedAt: page.data.publishedAt,
        thumbnail: page.data.thumbnail,
        raw: rawContent,
        mdx: page.data.body,
        toc: page.data.toc,
      }}
    />
  );
};

export default BlogSlugPage;
