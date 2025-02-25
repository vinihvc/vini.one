import { cn } from "@/lib/cn";
import { ExternalLink } from "lucide-react";

import type { REPO_LINKS } from "@/config/repo";

interface RepoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: (typeof REPO_LINKS)[number];
}

export const RepoCard = (props: RepoCardProps) => {
  const { data, className, ...rest } = props;

  return (
    <article
      className={cn(
        'relative flex items-center gap-x-5 rounded-lg border border-white/5 bg-card p-4 drop-shadow-lg transition hover:border-white/10',
        className,
      )}
      {...rest}
    >
      <data.icon className="size-6" aria-hidden />

      <div>
        <h1 className='mb-1 font-medium text-lg'>{data.title}</h1>

        <p className='line-clamp-2 text-muted-foreground text-sm'>
          {data.description}
        </p>
      </div>

      <div className='absolute top-3 right-3'>
        <ExternalLink className="size-4 opacity-50 transition group-hover:opacity-100 group-focus-visible:opacity-100" />
      </div>
    </article>
  );
};
