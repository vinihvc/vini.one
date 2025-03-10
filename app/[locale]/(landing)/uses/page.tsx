import { FadeSection } from '@/components/ui/fade-section'
import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'
import { USES } from '@/content/uses'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('page.uses.section')

  return {
    title: t('heading.title'),
  }
}

const UsesPage = async () => {
  const t = await getTranslations('page.uses.section')

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

      <div className="prose prose-invert mt-10 text-muted-foreground">
        {USES.map((use, index) => (
          <FadeSection key={use.title} delay={(index + 1) * 0.05} blur>
            <h3>{use.title}</h3>

            <ul>
              {use.items.map((item) => (
                <li key={item.title}>
                  {item.link && (
                    <NavLink
                      href={item.link}
                      className="rounded-xs underline underline-offset-4 ring-purple-500 transition hover:text-purple-500"
                      isExternal
                    >
                      {item.title}
                    </NavLink>
                  )}

                  {!item.link && (
                    <span
                      // biome-ignore lint/a11y/noNoninteractiveTabindex: <explanation>
                      tabIndex={0}
                      className="rounded-xs font-medium text-foreground outline-0 ring-offset-2 ring-offset-background transition focus-visible:ring-2 focus-visible:ring-purple-500"
                    >
                      {item.title}
                    </span>
                  )}

                  <span> - {item.description}</span>
                </li>
              ))}
            </ul>
          </FadeSection>
        ))}
      </div>
    </div>
  )
}

export default UsesPage
