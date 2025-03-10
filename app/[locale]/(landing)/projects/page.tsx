import { Button } from '@/components/ui/button'
import { FadeSection } from '@/components/ui/fade-section'
import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'
import { SITE_CONFIG } from '@/config/site'
import { PROJECTS } from '@/content/projects'
import { createOgImage } from '@/utils/create-og-image'
import { ExternalLink } from 'lucide-react'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ProjectCard } from './_components/project-card'

export const generateMetadata = async (): Promise<Metadata> => {
  const t = await getTranslations('page.projects.metadata')

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `${SITE_CONFIG.url}/projects`,
      images: [
        {
          url: createOgImage(t('title')),
          width: 1200,
          height: 630,
          alt: t('title'),
        },
      ],
    },
  }
}

const ProjectsPage = async () => {
  const t = await getTranslations('page.projects.section')

  return (
    <div className="container selection:bg-green-500">
      <FadeSection className="space-y-1">
        <Heading className="from-green-500 to-teal-500">
          {t('heading.title')}
        </Heading>

        <h2 className="text-lg text-muted-foreground">
          {t('heading.description')}
        </h2>
      </FadeSection>

      <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {PROJECTS.map((project, index) => {
          const description = t(`projects.apps.${project.key}`)

          if (!description) {
            throw new Error(`Project ${project.key} has no description`)
          }

          return (
            <FadeSection
              key={project.key}
              delay={(index + 1) * 0.05}
              blur
              asChild
            >
              <NavLink
                className="group rounded-md ring-green-500"
                href={project.website}
                isExternal
              >
                <ProjectCard data={{ ...project, description }} />
              </NavLink>
            </FadeSection>
          )
        })}
      </div>

      <FadeSection delay={(PROJECTS.length + 1) * 0.05} asChild>
        <div className="mt-8 flex justify-end">
          <Button asChild>
            <NavLink
              className="ring-green-500"
              href={`https://github.com/${SITE_CONFIG.github}?tab=repositories`}
              isExternal
            >
              {t('projects.cta')}
              <ExternalLink />
            </NavLink>
          </Button>
        </div>
      </FadeSection>
    </div>
  )
}

export default ProjectsPage
