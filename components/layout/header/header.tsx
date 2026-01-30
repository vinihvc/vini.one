import { cn } from "@/lib/cn";
import { HeaderLogo } from "./header.logo";
import { HeaderNavItem } from "./header.nav-item";
import { HEADER_ROUTES } from "./header.routes";

interface HeaderProps extends React.ComponentProps<"header"> {}

export const Header = (props: HeaderProps) => {
  const { className, ...rest } = props;

  return (
    <header
      className={cn(
        "container fixed inset-x-0 top-4 z-50 selection:bg-yellow-500 max-sm:hidden"
      )}
      {...rest}
    >
      <div
        className={cn(
          "h-16",
          "px-3",
          "flex items-center justify-between",
          "bg-black/60 backdrop-blur-md",
          "border border-foreground/5",
          "rounded-xl",
          className
        )}
      >
        <HeaderLogo />

        <nav className="flex items-center gap-2">
          {HEADER_ROUTES.map((route) => {
            if (route.onlyMobile) {
              return null;
            }

            return (
              <HeaderNavItem
                data={{ ...route, label: route.label }}
                key={route.href}
              />
            );
          })}
        </nav>
      </div>
    </header>
  );
};
