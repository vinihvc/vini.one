import type { Metadata } from 'next'

import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'
import { PlaceholderImage } from '@/components/ui/placeholder-image'
import { COMPANIES } from '@/content/companies'
import { CompaniesSection } from './_components/companies'

export const metadata: Metadata = {
  title: 'About',
}

const getData = async () => {
  return {
    companies: COMPANIES,
  }
}

const AboutPage = async () => {
  const { companies } = await getData()

  const firstJob = companies[companies.length - 1]
  const startYear = new Date(firstJob.startDate).getFullYear()

  return (
    <section className="container selection:bg-orange-500">
      <div className="space-y-1">
        <Heading className="from-orange-500 to-yellow-500">About</Heading>

        <h2 className="text-lg text-muted-foreground">
          {`Here's a little bit about me, my career, and what I do.`}
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-14">
        <PlaceholderImage
          className="aspect-square shrink-0 rounded-md max-xs:w-full"
          src="/images/me.webp"
          width={300}
          height={300}
          alt="Picture of Vinicius Vicentini, looking up and behind is the Rijksmuseum"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="space-y-5 text-justify text-muted-foreground">
          <p>
            <span className="font-medium text-foreground">{`Hi, I'm Vini`}</span>
            , my first foray into programming came from editing Mods for
            Counter-Strike 1.6. Then I had some websites and blogs and
            eventually decided to turn it into a career.
          </p>

          <p>
            I enjoy working where design meets code.
            <span className="font-medium text-foreground">
              {' '}
              CSS, Design Systems, and Animation
            </span>{' '}
            - these are my passion points. Crafting exceptional component APIs
            that users love to use.
          </p>

          <p>
            In my free time, I enjoy{' '}
            <NavLink
              className="text-foreground underline outline-none ring-orange-500 transition hover:text-orange-500"
              href="/bookshelf"
            >
              reading books
            </NavLink>
            , cooking, and
            <span className="font-medium text-foreground">
              {' '}
              spending time with my dogs.
            </span>
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-black text-2xl">Career</h2>

            <h3 className="text-muted-foreground">
              {`${
                new Date().getFullYear() - startYear
              }+ years of experience in the industry`}
            </h3>
          </div>
        </div>

        <CompaniesSection className="mt-4" data={companies} />
      </div>
    </section>
  )
}

export default AboutPage
