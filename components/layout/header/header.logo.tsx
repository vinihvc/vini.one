import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { SITE_CONFIG } from "@/config/site";
import { cn } from "@/lib/cn";
import { Icons } from "@/lib/icons";

interface HeaderLogoProps
  extends Omit<React.ComponentProps<typeof NavLink>, "href"> {}

export const HeaderLogo = (props: HeaderLogoProps) => {
  const { className, ...rest } = props;

  return (
    <Button
      asChild
      className={cn(
        "hover:bg-foreground/5 [&.active]:bg-foreground/5",
        className
      )}
      size="icon-xl"
      variant="ghost"
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
