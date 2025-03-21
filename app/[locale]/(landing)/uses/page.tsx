import { allUses } from '@/.contentlayer/generated'
import { MDXComponents } from '@/components/mdx/mdx-components'
import { FadeSection } from '@/components/ui/fade-section'
import { Heading } from '@/components/ui/heading'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('pages.uses.section')

  return {
    title: t('heading.title'),
  }
}

interface UsesPageProps {
  params: Promise<{
    locale: string
  }>
}

const UsesPage = async (props: UsesPageProps) => {
  const { locale } = await props.params

  const t = await getTranslations('pages.uses.section')

  const uses = allUses.find((use) => use.slug === locale)

  if (!uses) {
    notFound()
  }

  return (
    <div className="container selection:bg-purple-500">
      <FadeSection className="space-y-1">
        <Heading className="from-purple-500 to-blue-500">
          {t('heading.title')}
        </Heading>

        <h2 className="text-lg text-muted-foreground">
          {t('heading.description')}
        </h2>
      </FadeSection>

      <div className="prose prose-invert prose-p:my-0 mt-10 prose-strong:font-medium text-muted-foreground prose-a:transition-colors prose-a:hover:text-purple-500">
        <MDXComponents content={uses.body.code} />
      </div>
    </div>
  )
}

export default UsesPage
