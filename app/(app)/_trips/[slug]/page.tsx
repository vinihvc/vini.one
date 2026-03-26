import { notFound } from "next/navigation";
import { MDXContent } from "@/components/mdx/mdx-content";
import { tripsSource } from "@/lib/source";
import { absoluteUrl } from "@/lib/url";
import { ogImage } from "@/utils/og-image";

export const generateStaticParams = async () => {
  const trips = tripsSource.getPages();

  const publishedTrips = trips.filter(
    ({ data }) => data.status === "published"
  );

  return publishedTrips.map((trip) => ({ slug: trip.slugs[0] }));
};

export const generateMetadata = async (
  props: { params: Promise<{ slug: string }> },
) => {
  // export const generateMetadata = async (props: PageProps<"/trips/[slug]">) => {
  const { slug } = await props.params;

  const page = tripsSource.getPage([slug]);

  const isPublished = page?.data.status === "published";

  if (!(page && isPublished)) {
    notFound();
  }

  const title = `${page.data.city}, ${page.data.country}`;

  return {
    title,
    description: page.data.description,
    openGraph: {
      title,
      description: page.data.description,
      url: absoluteUrl(`/trips/${slug}`),
      images: [{ url: ogImage(title), width: 1200, height: 630 }],
    },
  };
};

const TripsSlugPage = async (props: {
  params: Promise<{ slug: string }>;
}) => {
  // const TripsSlugPage = async (props: PageProps<"/trips/[slug]">) => {
  const { slug } = await props.params;

  const page = tripsSource.getPage([slug]);

  const isPublished = page?.data.status === "published";

  if (!(page && isPublished)) {
    notFound();
  }

  const rawContent = await page.data.getText("raw");

  const title = `${page.data.city}, ${page.data.country}`;

  return (
    <MDXContent
      data={{
        title,
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

export default TripsSlugPage;
