import type { Metadata } from 'next'

import { Heading } from '@/components/ui/heading'
import { NavLink } from '@/components/ui/nav-link'
import { getUses } from '@/services/requests'

export const metadata: Metadata = {
  title: 'Uses',
}

const UsesPage = async () => {
  const data = await getUses()

  return (
    <div className="container selection:bg-purple-500">
      <div className="space-y-1">
        <Heading className="from-purple-500 to-blue-500">Uses</Heading>

        <h2 className="text-lg text-muted-foreground">
          Some of the tools, apps, and gear that I use on a daily basis.
        </h2>
      </div>

      <div className="prose prose-invert mt-10 text-muted-foreground">
        {data.map((use) => (
          <div key={use.title}>
            <h2>{use.title}</h2>

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
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsesPage
