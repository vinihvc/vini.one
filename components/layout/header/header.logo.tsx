import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/cn";
import { Icons } from "@/lib/icons";

interface HeaderLogoProps
  extends Omit<React.ComponentProps<typeof NavLink>, "href"> {}

export const HeaderLogo = async (props: HeaderLogoProps) => {
  const { className, ...rest } = props;

  return (
    <Button
      asChild
      className={cn(
        "border-none text-foreground hover:bg-foreground/5 [&.active]:bg-foreground/10 [&_svg]:h-5 [&_svg]:w-5",
        className
      )}
      size="icon"
    >
      <NavLink
        aria-label={`${SITE_CONFIG.name}, Back to homepage`}
        exact
        href="/"
        {...rest}
      >
        <Icons.logo />
      </NavLink>
    </Button>
  );
};
