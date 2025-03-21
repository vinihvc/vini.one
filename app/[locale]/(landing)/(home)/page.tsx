import { Announcement } from '@/components/layout/announcement'
import { BlurImage } from '@/components/ui/blur-image'
import { FadeSection } from '@/components/ui/fade-section'
import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'
import { COMPANIES } from '@/content/companies'
import { getTranslations } from 'next-intl/server'
import React from 'react'
import { SocialLinks } from './_components/social-links'

const CompaniesSection = React.lazy(() => import('./_components/companies'))

const HomePage = async () => {
  const data = COMPANIES

  const firstJob = data[data.length - 1]

  if (!firstJob) {
    throw new Error('First job not found')
  }

  const t = await getTranslations('pages.home.section')

  const startYear = new Date(firstJob.startDate).getFullYear()

  return (
    <section className="container selection:bg-orange-500">
      <FadeSection delay={0.2}>
        <Announcement
          className="focus-visible:ring-orange-500"
          data={{
            badge: t('announcement.badge'),
            label: t('announcement.title'),
            href: '/projects',
          }}
        />
      </FadeSection>

      <FadeSection className="mt-2 space-y-1">
        <Heading className="from-orange-500 to-yellow-500">
          {t('heading.title')}
        </Heading>

        <h2 className="text-lg text-muted-foreground">
          {t('heading.description')}
        </h2>
      </FadeSection>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
        <FadeSection delay={0.1} className="relative">
          <BlurImage
            className="w-full shrink-0 rounded-md sm:h-80 sm:w-80"
            src="/images/me.webp"
            width={320}
            height={320}
            alt={t('about.image.alt')}
          />

          <SocialLinks className="absolute right-2 bottom-2" />
        </FadeSection>

        <div className="prose prose-invert prose-p:text-justify text-muted-foreground">
          <FadeSection delay={0.2} asChild>
            <p>
              {t.rich('about.content.part-1', {
                b: (chunks: React.ReactNode) => (
                  <span className="font-medium text-foreground">{chunks}</span>
                ),
              })}
            </p>
          </FadeSection>

          <FadeSection delay={0.3} asChild>
            <p>
              {t.rich('about.content.part-2', {
                b: (chunks: React.ReactNode) => (
                  <span className="font-medium text-foreground">{chunks}</span>
                ),
              })}
            </p>
          </FadeSection>

          <FadeSection delay={0.4} asChild>
            <p>
              {t.rich('about.content.part-3', {
                read: (chunks: React.ReactNode) => (
                  <NavLink
                    className="rounded-xs text-foreground underline ring-orange-500 hover:text-orange-500"
                    href="/bookshelf"
                  >
                    {chunks}
                  </NavLink>
                ),
                travel: (chunks: React.ReactNode) => (
                  <NavLink
                    className="rounded-xs text-foreground underline ring-orange-500 hover:text-orange-500"
                    href="/trips"
                  >
                    {chunks}
                  </NavLink>
                ),
                b: (chunks: React.ReactNode) => (
                  <span className="font-medium text-foreground">{chunks}</span>
                ),
              })}
            </p>
          </FadeSection>
        </div>
      </div>

      <div className="mt-14">
        <div className="flex items-center justify-between">
          <FadeSection delay={0.5}>
            <h2 className="font-semibold text-2xl">{t('career.title')}</h2>

            <h3 className="text-muted-foreground">
              {t('career.description', {
                years: new Date().getFullYear() - startYear,
              })}
            </h3>
          </FadeSection>
        </div>

        <FadeSection delay={0.6}>
          <CompaniesSection className="mt-4" data={data} />
        </FadeSection>
      </div>
    </section>
  )
}

export default HomePage
