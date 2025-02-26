import { cn } from '@/lib/cn'
import Image from 'next/image'

import type { CompanyType } from '@/types/company'

interface CompanyCardProps extends React.ComponentProps<'article'> {
  /**
   * Company data
   */
  data: CompanyType
}

export const CompanyCard = (props: CompanyCardProps) => {
  const { data, className, ...rest } = props

  return (
    <article
      className={cn('grid grid-cols-2 items-center rounded-lg py-3', className)}
      {...rest}
    >
      <div className="flex items-center gap-5 whitespace-nowrap">
        <div className="shrink-0">
          <Image
            className="pointer-events-none rounded-full border"
            src={`/images/companies/${data.image}.webp`}
            width={48}
            height={48}
            alt={`${data.company} brand logo`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div>
          <h1 className="font-medium">{data.title}</h1>

          <h2 className="text-muted-foreground">{data.company}</h2>
        </div>
      </div>

      <div className="flex items-center justify-end gap-1 font-medium text-muted-foreground sm:mt-1">
        <span>{`${data.startDate} - `}</span>

        {data.endDate ? (
          <time> {data.endDate}</time>
        ) : (
          <span className="text-foreground">Now</span>
        )}
      </div>
    </article>
  )
}
