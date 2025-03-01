import { BlurImage } from '@/components/ui/blur-image'
import { FadeSection } from '@/components/ui/fade-section'
import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'
import { COMPANIES } from '@/content/companies'
import { CompaniesSection } from './_components/companies'
import { SocialLinks } from './_components/social-links'

const HomePage = async () => {
  const data = COMPANIES

  const firstJob = data[data.length - 1]

  if (!firstJob) {
    throw new Error('First job not found')
  }

  const startYear = new Date(firstJob.startDate).getFullYear()

  return (
    <section className="container selection:bg-orange-500">
      <FadeSection className="space-y-1">
        <Heading className="from-orange-500 to-yellow-500">Greetings</Heading>

        <h2 className="text-lg text-muted-foreground">
          {`Here's a little bit about me, my career, and what I do.`}
        </h2>
      </FadeSection>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-8">
        <FadeSection delay={0.2} className="relative">
          <BlurImage
            className="w-full shrink-0 rounded-md sm:h-80 sm:w-80"
            src="/images/me.webp"
            width={320}
            height={320}
            alt="Picture of Vinicius Vicentini, looking up and behind is the Rijksmuseum, in Amsterdam"
          />

          <SocialLinks className="absolute right-2 bottom-2" />
        </FadeSection>

        <div className="prose prose-invert prose-p:text-justify text-muted-foreground">
          <FadeSection delay={0.4} asChild>
            <p>
              <span className="font-medium text-foreground">{`Hi, I'm Vini`}</span>
              , my first foray into programming came from editing Mods for
              Counter-Strike 1.6. Then I had some websites and blogs and
              eventually decided to turn it into a career.
            </p>
          </FadeSection>

          <FadeSection delay={0.6} asChild>
            <p>
              I enjoy working where design meets code.
              <span className="font-medium text-foreground">
                {' '}
                CSS, Design Systems, and Animation
              </span>{' '}
              - these are my passion points. Crafting exceptional component APIs
              that users love to use.
            </p>
          </FadeSection>

          <FadeSection delay={0.8} asChild>
            <p>
              In my free time, I enjoy{' '}
              <NavLink
                className="rounded-xs text-foreground underline ring-orange-500 hover:text-orange-500"
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
          </FadeSection>
        </div>
      </div>

      <FadeSection delay={1.2} className="mt-14">
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

        <CompaniesSection className="mt-4" data={data} />
      </FadeSection>
    </section>
  )
}

export default HomePage
