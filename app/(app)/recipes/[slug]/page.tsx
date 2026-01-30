import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx/mdx-content";
import { SITE_CONFIG } from "@/config/site";
import { blogSource, recipesSource } from "@/lib/source";
import { ogImage } from "@/utils/og-image";

export const generateStaticParams = async () => {
  const posts = blogSource.getPages();

  const publishedPosts = posts.filter(
    ({ data }) => data.status === "published"
  );

  return publishedPosts.map((post) => ({ slug: post.slugs[0] }));
};

export const generateMetadata = async (props: PageProps<"/recipes/[slug]">) => {
  const { slug } = await props.params;

  const page = recipesSource.getPage([slug]);

  const isPublished = page?.data.status === "published";

  if (!(page && isPublished)) {
    notFound();
  }

  return {
    title: page.data.title,
    openGraph: {
      title: page.data.title,
      url: `${SITE_CONFIG.url}/recipes/${slug}`,
      images: [{ url: ogImage(page.data.title), width: 1200, height: 630 }],
    },
  };
};

const RecipeSlugPage = async (props: PageProps<"/recipes/[slug]">) => {
  const { slug } = await props.params;

  const page = recipesSource.getPage([slug]);

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
        mdx: page.data.body,
        raw: rawContent,
        toc: page.data.toc,
      }}
    />
  );
};

export default RecipeSlugPage;
