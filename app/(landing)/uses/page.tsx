import type { Metadata } from 'next'

import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'
import { getUses } from '@/services/requests'
import { ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Personal Uses',
}

const UsesPage = async () => {
  const data = await getUses()

  return (
    <div className="container selection:bg-purple-500">
      <div className="space-y-1">
        <Heading className="from-purple-500 to-blue-500 max-sm:text-4xl">
          Personal Uses
        </Heading>

        <h2 className="text-lg text-muted-foreground">
          Some of the tools, apps, and gear that I use on a daily basis.
        </h2>
      </div>

      <div className="mt-10 space-y-10">
        {data.map((use) => (
          <div key={use.title} className="space-y-4">
            <h2 className="font-black text-2xl">{use.title}</h2>

            <ul className="list-inside list-disc space-y-2 pl-6 marker:text-muted-foreground">
              {use.items.map((item) => (
                <li key={item.title} className="flex gap-1">
                  {item.link && (
                    <NavLink
                      href={item.link}
                      className="flex items-center gap-1 underline underline-offset-4 ring-purple-500 transition hover:text-purple-500"
                      isExternal
                    >
                      {item.title}

                      <ExternalLink className="h-3.5 w-3.5" />
                    </NavLink>
                  )}

                  {!item.link && <span>{item.title}</span>}

                  <span className="text-muted-foreground">
                    - {item.description}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsesPage
