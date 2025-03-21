import { BlurImage } from '@/components/ui/blur-image'
import type { CompanyType } from '@/content/companies'
import { cn } from '@/lib/cn'
import { formatDate } from '@/utils/formatter'
import { useLocale, useTranslations } from 'next-intl'

interface CompanyCardProps extends React.ComponentProps<'article'> {
  /**
   * Company data
   */
  data: CompanyType
}

export const CompanyCard = (props: CompanyCardProps) => {
  const { data, className, ...rest } = props

  const locale = useLocale()

  const t = useTranslations('pages.home.section.career')

  return (
    <article
      className={cn(
        'grid grid-cols-2 items-center rounded-lg py-3 max-sm:text-sm',
        className,
      )}
      {...rest}
    >
      <div className="flex items-center gap-2 whitespace-nowrap sm:gap-5">
        <div className="shrink-0">
          <BlurImage
            className="pointer-events-none h-12 w-12 rounded-full border"
            src={`/images/companies/${data.image}.webp`}
            width={48}
            height={48}
            alt={`${data.company} brand logo`}
          />
        </div>

        <div>
          <h1 className="font-medium">{data.title}</h1>

          <h2 className="text-muted-foreground">{data.company}</h2>
        </div>
      </div>

      <div className="flex items-center justify-end gap-1 font-medium text-muted-foreground sm:mt-1">
        <span>{`${formatDate(
          data.startDate,
          {
            month: '2-digit',
            year: 'numeric',
          },
          locale,
        )} - `}</span>

        {data.endDate ? (
          <time dateTime={data.endDate}>
            {formatDate(
              data.endDate,
              {
                month: '2-digit',
                year: 'numeric',
              },
              locale,
            )}
          </time>
        ) : (
          <span className="text-foreground">{t('common.now')}</span>
        )}
      </div>
    </article>
  )
}
