import { SEO } from '@/config/seo'
import { SOCIAL_LINKS } from '@/config/social'

import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'

const HomePage = async () => {
  return (
    <div className="container flex flex-1 flex-col justify-center selection:bg-blue-500">
      <div className="space-y-2">
        <h1 className="font-bold text-4xl">{SEO.title}</h1>

        <h2 className="text-lg text-muted-foreground">{SEO.description}</h2>
      </div>

      <div className="mt-5 flex gap-2 sm:gap-5">
        {SOCIAL_LINKS.map((link) => (
          <Button
            key={link.link}
            className="h-auto w-auto p-4 ring-blue-500 [&_svg]:h-5 [&_svg]:w-5"
            asChild
          >
            <NavLink href={link.link} isExternal>
              <link.icon aria-hidden />

              <span className="sr-only">{`Visit my ${link.title}`}</span>
            </NavLink>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default HomePage
