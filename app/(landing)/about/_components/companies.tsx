'use client'

import { cn } from '@/lib/cn'
import React from 'react'

import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'
import type { CompanyType } from '@/types/company'

import { ChevronDown } from 'lucide-react'
import { CompanyCard } from './company-card'

interface CompaniesSectionProps extends React.ComponentProps<'div'> {
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
    <div {...rest}>
      <ul className="group space-y-2">
        {data.map((company, index) => {
          if (!showAll && index >= MAX_COMPANIES) {
            return null
          }

          return (
            <li
              className={cn(
                'hover:!opacity-100 w-full animate-in transition group-hover:opacity-50',
                { 'fade-in slide-in-from-bottom-10': showAll },
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
    </div>
  )
}
