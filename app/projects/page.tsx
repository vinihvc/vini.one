import type { Metadata } from 'next'

import { REPO_LINKS } from '@/config/repo'
import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'

import { RepoCard } from './_components/repo-card'
import { VisitGithub } from './_components/visit-github'

export const metadata: Metadata = {
  title: 'Projects',
}

const getData = async () => {
  return {
    repos: REPO_LINKS,
  }
}

const ProjectsPage = async () => {
  const { repos } = await getData()

  return (
    <div className="container selection:bg-green-500">
      <div className="space-y-1">
        <Heading className="from-green-500 to-teal-500">Projects</Heading>

        <h2 className='text-lg text-muted-foreground'>
          My open-source projects and contributions.
        </h2>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-10">
        {repos.map((repo) => (
          <NavLink
            key={repo.title}
            className="group rounded ring-green-500"
            href={repo.website_url}
            isExternal
          >
            <RepoCard data={repo} />
          </NavLink>
        ))}
      </div>

      <VisitGithub className="mt-8" />
    </div>
  )
}

export default ProjectsPage
