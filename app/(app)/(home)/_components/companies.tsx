"use client";

import { ChevronDown } from "lucide-react";
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

const CompaniesSection = (props: CompaniesSectionProps) => {
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
						<FadeSection key={company.company} delay={delay} blur asChild>
							<li
								className={cn(
									"hover:!opacity-100 w-full transition sm:group-hover:opacity-50",
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
					);
				})}
			</ul>

			<div className="mt-5 flex justify-end">
				<Button
					data-state={showAll ? "open" : "closed"}
					className="group ring-orange-500"
					onClick={() => setShowAll((prev) => !prev)}
				>
					{showAll ? "Show less" : "Show more"}

					<ChevronDown className="size-4 transition group-data-[state=open]:rotate-180" />
				</Button>
			</div>
		</section>
	);
};

export default CompaniesSection;
