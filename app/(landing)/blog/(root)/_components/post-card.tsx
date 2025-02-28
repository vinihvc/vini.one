import type { Post } from '@/.contentlayer/generated'
import { BlurImage } from '@/components/ui/blur-image'
import { cn } from '@/lib/cn'
import { formatDate } from '@/utils/formatter'
import { Calendar } from 'lucide-react'

interface PostCardProps extends React.ComponentProps<'div'> {
  /**
   * The post data to display
   */
  data: Post
}

export const PostCard = (props: PostCardProps) => {
  const { data, className, ...rest } = props

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-md border bg-card p-3',
        className,
      )}
      {...rest}
    >
      <div className="flex flex-1 flex-col gap-4">
        <BlurImage
          src={data.thumbnail.path}
          alt={data.thumbnail.alt}
          width={160}
          height={160}
          className="h-40 w-full rounded-sm object-cover"
        />

        <div className="flex flex-1 flex-col gap-4 p-1">
          <h1 className="font-medium text-lg/tight">{data.title}</h1>

          <p className="flex-1 text-base text-muted-foreground">
            {data.description}
          </p>

          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />

            <time dateTime={data.publishedAt} className="text-xs">
              {formatDate(data.publishedAt)}
            </time>
          </div>
        </div>
      </div>
    </article>
  )
}
