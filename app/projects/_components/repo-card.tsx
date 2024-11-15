import { cn } from '@/utils/cn'
import { ExternalLink } from 'lucide-react'

import type { REPO_LINKS } from '@/config/repo'

interface RepoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  data: (typeof REPO_LINKS)[number]
}

export const RepoCard = (props: RepoCardProps) => {
  const { data, className, ...rest } = props

  return (
    <article
      className={cn(
        'bg-card/40 relative flex items-center gap-x-5 rounded-lg border border-white/5 p-4 drop-shadow-lg transition hover:border-white/10',
        className,
      )}
      {...rest}
    >
      <data.icon className="size-6" aria-hidden />

      <div>
        <h1 className="mb-1 text-lg font-medium">{data.title}</h1>

        <p className="text-muted-foreground line-clamp-2 text-sm">
          {data.description}
        </p>
      </div>

      <div className="absolute right-3 top-3">
        <ExternalLink className="size-4 opacity-50 transition group-hover:opacity-100 group-focus-visible:opacity-100" />
      </div>
    </article>
  )
}
