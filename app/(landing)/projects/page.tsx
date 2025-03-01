import { FadeSection } from '@/components/ui/fade-section'
import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'
import { PROJECTS } from '@/content/projects'
import type { Metadata } from 'next'
import { RepoCard } from './_components/repo-card'
import { VisitGithub } from './_components/visit-github'

export const metadata: Metadata = {
  title: 'Projects',
}

const ProjectsPage = async () => {
  return (
    <div className="container selection:bg-green-500">
      <FadeSection className="space-y-1">
        <Heading className="from-green-500 to-teal-500">Projects</Heading>

        <h2 className="text-lg text-muted-foreground">
          My open-source projects and contributions.
        </h2>
      </FadeSection>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {PROJECTS.map((repo, index) => (
          <FadeSection key={repo.title} delay={(index + 1) * 0.05} blur asChild>
            <NavLink
              className="group rounded-md ring-green-500"
              href={repo.website}
              isExternal
            >
              <RepoCard data={repo} />
            </NavLink>
          </FadeSection>
        ))}
      </div>

      <FadeSection delay={(PROJECTS.length + 1) * 0.05} asChild>
        <VisitGithub className="mt-8" />
      </FadeSection>
    </div>
  )
}

export default ProjectsPage
