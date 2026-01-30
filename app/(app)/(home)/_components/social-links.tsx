import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { SOCIAL } from "@/content/static/social";
import { cn } from "@/lib/cn";
import { Icons } from "@/lib/icons";

interface SocialLinksProps extends React.ComponentProps<"div"> {}

const SOCIAL_KEYS = ["x", "github"];

export const SocialLinks = async (props: SocialLinksProps) => {
	const { className, ...rest } = props;

	const filteredSocial = SOCIAL.filter((social) =>
		SOCIAL_KEYS.includes(social.key),
	);

	return (
		<div className={cn("flex gap-2", className)} {...rest}>
			{filteredSocial.map((link) => {
				const Icon = Icons[link.key as keyof typeof Icons];

				return (
					<Button
						key={link.key}
						className="h-11 w-11 border bg-background text-foreground ring-orange-500 hover:border-orange-500 hover:bg-background/80 sm:h-9 sm:w-9 max-sm:[&_svg]:h-5 max-sm:[&_svg]:w-5"
						size="icon"
						asChild
					>
						<NavLink href={link.url} isExternal>
							<Icon />

							<span className="sr-only">Visit my {link.title}</span>
						</NavLink>
					</Button>
				);
			})}
		</div>
	);
};
