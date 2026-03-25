import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/ui/nav-link";
import { cn } from "@/lib/cn";
import type { RouteType } from "./header.routes";

interface HeaderNavItemProps
  extends Omit<React.ComponentProps<typeof NavLink>, "href"> {
  /**
   * Route data
   */
  data: RouteType & { label: string };
}

export const HeaderNavItem = (props: HeaderNavItemProps) => {
  const { data, className, ...rest } = props;

  return (
    <Button asChild variant="ghost">
      <NavLink
        className={cn(
          "opacity-70 hover:opacity-90 [&.active]:opacity-100",
          className
        )}
        href={data.href}
        {...rest}
      >
        {data.label}
      </NavLink>
    </Button>
  );
};
