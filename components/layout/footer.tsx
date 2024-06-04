import React from 'react'

import { TRAVElING_COUNTRIES } from '@/contents/traveling'
import { cn } from '@/utils/cn'

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Footer = (props: FooterProps) => {
	const { className, ...rest } = props

	const livingCountry = TRAVElING_COUNTRIES.at(0)

	return (
		<footer className={cn('py-10 selection:bg-green-500', className)} {...rest}>
			<div className="container flex justify-between items-center text-muted">
				<div className="flex items-center space-x-2">
					<span className="relative flex size-2 top-[1px]">
						<span className="absolute size-full animate-ping rounded-full bg-success opacity-75" />
						<span className="relative size-2 rounded-full bg-success" />
					</span>

					{livingCountry && (
						<div className="flex gap-2">
							<span className="text-xs">Living in</span>

							{React.createElement(livingCountry.flag)}
						</div>
					)}
				</div>

				<span>&copy;{` ${new Date().getFullYear()} Vinicius Vicentini`}</span>
			</div>
		</footer>
	)
}
