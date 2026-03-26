"use client";

import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { FadeSection } from "@/components/ui/fade-section";
import { NavLink } from "@/components/ui/nav-link";
import type { CompanyType } from "@/content/static/companies";
import { cn } from "@/lib/cn";
import { CompanyCard } from "./company-card";

interface CompaniesSectionProps extends React.ComponentProps<"section"> {
  /**
   * The data of the companies
   */
  data: CompanyType[];
}

const MAX_COMPANIES = 3;

export const CompaniesSection = (props: CompaniesSectionProps) => {
  const { data, ...rest } = props;

  const [showAll, setShowAll] = React.useState(false);

  return (
    <section {...rest}>
      <ul className="group space-y-2 transition">
        {data.map((company, index) => {
          const isGreaterThanMaxCompanies = index >= MAX_COMPANIES;
          const incrementalDelay = (index + 1) * 0.05;

          const delay = isGreaterThanMaxCompanies ? 0 : incrementalDelay;

          if (!showAll && index >= MAX_COMPANIES) {
            return null;
          }

          return (
            <li
              className={cn(
                "w-full transition hover:opacity-100! sm:group-hover:opacity-50"
              )}
              key={company.company}
            >
              <FadeSection blur delay={delay}>
                <NavLink
                  className="block rounded-xl px-2"
                  href={company.url}
                  isExternal
                >
                  <CompanyCard data={company} />
                </NavLink>
              </FadeSection>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex justify-end">
        <Button
          className="group opacity-64 hover:opacity-100"
          data-state={showAll ? "open" : "closed"}
          onClick={() => setShowAll((prev) => !prev)}
          variant="ghost"
        >
          {showAll ? "Show less" : "Show more"}

          <ChevronDownIcon className="transition group-data-[state=open]:rotate-180" />
        </Button>
      </div>
    </section>
  );
};
