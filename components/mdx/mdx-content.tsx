import type { TOCItemType } from "fumadocs-core/toc";
import { Calendar, Clock } from "lucide-react";
import type { MDXContent as MDXContentType } from "mdx/types";
import React from "react";
import { cn } from "@/lib/cn";
import { mdxComponents } from "@/mdx-components";
import { formatDate, readTime } from "@/utils/formatter";
import { BlurImage } from "../ui/blur-image";
import { TableOfContent } from "./table-of-content";

const MDXPhotos = React.lazy(() => import("./mdx-photos"));

interface MDXContentProps extends React.ComponentProps<"article"> {
  /**
   * The data of the content
   */
  data: {
    title: string;
    description: string;
    publishedAt: Date | string;
    thumbnail: {
      path: string;
      alt: string;
    };
    photos?: {
      asset_id: string;
      url: string;
      width: number;
      height: number;
    }[];
    mdx: MDXContentType;
    raw?: string;
    toc?: TOCItemType[];
  };
}

export const MDXContent = (props: MDXContentProps) => {
  const { data, className, ...rest } = props;

  const formattedDate = formatDate(data.publishedAt, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const MDX = data.mdx;

  const rawContent = data.raw ?? "";
  const readTimeMinutes = rawContent ? readTime(rawContent) : 0;

  return (
    <article
      className={cn(
        "container grid max-w-3xl! gap-8 selection:bg-rose-500",
        className
      )}
      {...rest}
    >
      <div className="grid gap-2">
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl md:text-3xl">{data.title}</h1>

          <p className="text-lg text-muted-foreground">{data.description}</p>
        </div>

        <hr className="my-2 border-0 border-border border-t" />

        <div className="mt-2 flex justify-between text-sm">
          <time
            className="flex items-center gap-2 text-muted-foreground"
            dateTime={formattedDate}
          >
            <Calendar className="h-4 w-4" />

            {formattedDate}
          </time>

          <time className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            {readTimeMinutes}min read
          </time>
        </div>
      </div>

      <figure>
        <BlurImage
          alt={data.thumbnail.alt}
          className="aspect-square rounded-md"
          fill
          src={data.thumbnail.path}
        />

        <figcaption className="my-2 text-muted-foreground text-sm">
          {data.thumbnail.alt}
        </figcaption>
      </figure>

      <div className="grid gap-2">
        {data.toc ? <TableOfContent data={data.toc} /> : null}

        <MDX components={mdxComponents()} />

        {data.photos?.length ? <MDXPhotos data={data.photos} /> : null}
      </div>
    </article>
  );
};
