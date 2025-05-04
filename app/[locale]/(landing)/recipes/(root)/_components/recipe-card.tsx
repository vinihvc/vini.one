'use client'

import type { Recipe } from '@/.contentlayer/generated'
import { Badge } from '@/components/ui/badge'
import { BlurImage } from '@/components/ui/blur-image'
import { cn } from '@/lib/cn'
import { Flags } from '@/lib/flags'
import { formatDate } from '@/utils/formatter'
import { Calendar } from 'lucide-react'
import { useLocale } from 'next-intl'

interface RecipeCardProps extends React.ComponentProps<'div'> {
  /**
   * The recipe data to display
   */
  data: Recipe
}

export const RecipeCard = (props: RecipeCardProps) => {
  const { data, className, ...rest } = props

  const locale = useLocale()

  const Flag = Flags[data.country as keyof typeof Flags]

  const formattedDate = formatDate(
    data.publishedAt,
    {
      month: '2-digit',
      year: 'numeric',
      day: '2-digit',
    },
    locale,
  )

  return (
    <article
      className={cn(
        'relative flex h-full flex-col rounded-md border bg-card p-3',
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
          <div className="flex gap-1">
            {data.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-medium text-lg/tight">{data.title}</h1>

          <div className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="h-3 w-3" />

            <time dateTime={formattedDate} className="text-xs">
              {formattedDate}
            </time>
          </div>
        </div>
      </div>

      {data.country && <Flag className="absolute right-4 bottom-4" />}
    </article>
  )
}
