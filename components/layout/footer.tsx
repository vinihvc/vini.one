import type React from "react";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/cn";
import { Flags } from "@/lib/flags";

interface FooterProps extends React.ComponentProps<"footer"> {}

const Footer = async (props: FooterProps) => {
	const { className, ...rest } = props;

	const travelingCountry = {
		countryCode: "br",
		city: "São Paulo",
		state: "São Paulo",
		startDate: "2025-08-01",
		endDate: undefined,
	};

	const Flag = Flags["br"];

	return (
		<footer className={cn("py-10 selection:bg-green-500", className)} {...rest}>
			<div className="container flex items-center justify-between text-muted-foreground">
				{travelingCountry ? (
					<div className="flex items-center space-x-2">
						<span className="relative top-[1px] flex h-2 w-2">
							<span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
							<span className="relative h-2 w-2 rounded-full bg-green-500" />
						</span>

						<div className="flex items-center gap-2">
							<span className="text-xs">Currently</span>

							<Flag />
						</div>
					</div>
				) : (
					<div className="grow" />
				)}

				<span className="text-sm">
					&copy;{` ${new Date().getFullYear()} ${SITE_CONFIG.name}`}
				</span>
			</div>
		</footer>
	);
};

export default Footer;
