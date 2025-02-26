import { cn } from '@/lib/cn'
import type { PostType } from '@/types/post'
import { formatDate } from '@/utils/formatter'
import { Calendar } from 'lucide-react'

interface PostCardProps extends React.ComponentProps<'div'> {
  /**
   * The post data to display
   */
  data: PostType
}

export const PostCard = (props: PostCardProps) => {
  const { data, className, ...rest } = props

  return (
    <article
      className={cn('flex h-full flex-col rounded-md border p-4', className)}
      {...rest}
    >
      <div className="flex flex-1 flex-col gap-4">
        <h1 className="font-medium text-lg/tight">{data.title}</h1>

        <p className="flex-1 text-muted-foreground text-sm">
          {data.description}
        </p>

        <div className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />

          <time className="text-xs">{formatDate(data.createdAt, 'pt-BR')}</time>
        </div>
      </div>
    </article>
  )
}
