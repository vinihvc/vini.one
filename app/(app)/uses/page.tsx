import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeSection } from "@/components/ui/fade-section";
import { Heading } from "@/components/ui/heading";
import { SITE_CONFIG } from "@/config/site";
import { usesSource } from "@/lib/source";
import { mdxComponents } from "@/mdx-components";
import { ogImage } from "@/utils/og-image";

export const generateMetadata = async (): Promise<Metadata> => {
  const page = usesSource.getPage([]);

  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    openGraph: {
      title: page.data.title,
      url: `${SITE_CONFIG.url}/uses`,
      images: [{ url: ogImage(page.data.title), width: 1200, height: 630 }],
    },
  };
};

const UsesPage = () => {
  const page = usesSource.getPage([]);

  if (!page) {
    notFound();
  }

  const MDX = page.data.body;

  return (
    <div className="container max-w-3xl! selection:bg-purple-500">
      <FadeSection className="space-y-1">
        <Heading className="from-purple-500 to-blue-500">
          {page.data.title}
        </Heading>

        <h2 className="text-lg text-muted-foreground">
          Tools, apps, and gear that I use on a daily basis.
        </h2>
      </FadeSection>

      <div className="mt-10 text-muted-foreground **:[a]:hover:text-purple-500">
        <MDX components={mdxComponents()} />
      </div>
    </div>
  );
};

export default UsesPage;
