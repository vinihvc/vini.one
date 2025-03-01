'use client'

import { cn } from '@/lib/cn'
import React from 'react'

import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'
import type { CompanyType } from '@/types/company'

import { FadeSection } from '@/components/ui/fade-section'
import { ChevronDown } from 'lucide-react'
import { CompanyCard } from './company-card'

interface CompaniesSectionProps extends React.ComponentProps<'section'> {
  /**
   * The data of the companies
   */
  data: CompanyType[]
}

const MAX_COMPANIES = 3

export const CompaniesSection = (props: CompaniesSectionProps) => {
  const { data, ...rest } = props

  const [showAll, setShowAll] = React.useState(false)

  return (
    <section {...rest}>
      <ul className="group space-y-2">
        {data.map((company, index) => {
          if (!showAll && index >= MAX_COMPANIES) {
            return null
          }

          return (
            <FadeSection
              key={company.company}
              delay={(index + 1) * 0.05}
              blur
              asChild
            >
              <li
                className={cn(
                  'hover:!opacity-100 w-full group-hover:opacity-50',
                )}
                key={company.company}
              >
                <NavLink
                  className="block rounded-md px-2 ring-orange-500"
                  key={company.company}
                  href={company.url}
                  isExternal
                >
                  <CompanyCard data={company} />
                </NavLink>
              </li>
            </FadeSection>
          )
        })}
      </ul>

      <div className="mt-5 flex justify-end">
        <Button
          data-state={showAll ? 'open' : 'closed'}
          className="group ring-orange-500"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {`Show ${showAll ? 'less' : 'all'}`}

          <ChevronDown className="size-4 transition group-data-[state=open]:rotate-180" />
        </Button>
      </div>
    </section>
  )
}
