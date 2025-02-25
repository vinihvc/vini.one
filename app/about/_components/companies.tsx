'use client'

import React from 'react'
import { cn } from '@/lib/cn'

import type { CompanyType } from '@/config/companies'
import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'

import { CompanyCard } from './company-card'

interface CompaniesSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  data: CompanyType[]
}

const MAX_COMPANIES = 3

export const CompaniesSection = (props: CompaniesSectionProps) => {
  const { data, ...rest } = props

  const [showAll, setShowAll] = React.useState(false)

  return (
    <div {...rest}>
      <ul className="group space-y-2 sm:pl-6">
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
                className="block rounded px-2 ring-orange-500"
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
          className="ring-orange-500"
          onClick={() => setShowAll((prev) => !prev)}
        >
          {`Show ${showAll ? 'less' : 'all'}`}
        </Button>
      </div>
    </div>
  )
}
