import { Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BlurImage } from "@/components/ui/blur-image";
import { cn } from "@/lib/cn";
import type { BlogType } from "@/types/blog";
import { formatDate } from "@/utils/formatter";

interface PostCardProps extends React.ComponentProps<"div"> {
  /**
   * Post card data
   */
  data: BlogType;
}

export const PostCard = (props: PostCardProps) => {
  const { data, className, ...rest } = props;

  const formattedDate = formatDate(data.publishedAt, {
    month: "2-digit",
    year: "numeric",
    day: "2-digit",
  });

  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-md border bg-card p-3",
        className
      )}
      {...rest}
    >
      <div className="flex flex-1 flex-col gap-4">
        <BlurImage
          alt={data.thumbnail.alt}
          className="h-40 w-full rounded-sm object-cover"
          height={160}
          src={data.thumbnail.path}
          width={160}
        />

        <div className="flex flex-1 flex-col gap-4 p-1">
          <div className="flex gap-1">
            {data.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-medium text-lg/tight">{data.title}</h1>

          <p className="flex-1 text-base text-muted-foreground">
            {data.description}
          </p>

          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />

            <time className="text-xs" dateTime={formattedDate}>
              {formattedDate}
            </time>
          </div>
        </div>
      </div>
    </article>
  );
};
