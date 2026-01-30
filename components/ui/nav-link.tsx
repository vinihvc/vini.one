"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

export const linkVariants = tv({
  base: [
    "group",
    "transition",
    "outline-0 ring-offset-2 ring-offset-background focus-visible:ring-2",
  ],
});

interface NavLinkProps
  extends VariantProps<typeof linkVariants>,
    React.ComponentProps<typeof Link>,
    Omit<React.ComponentProps<"a">, "href"> {
  /**
   *  If `true`, the link will open in new tab
   */
  isExternal?: boolean;
  /**
   * If `true`, only exact path matches will be considered active
   * @default false
   */
  exact?: boolean;
}

export const NavLink = (props: NavLinkProps) => {
  const { href, isExternal, className, exact = false, ...rest } = props;

  const pathname = usePathname();
  const isCurrent = exact
    ? href === pathname
    : pathname.startsWith(href.toString());

  return (
    <Link
      aria-current={isCurrent ? "page" : undefined}
      className={cn(linkVariants({ className }), {
        active: isCurrent,
      })}
      href={href}
      prefetch
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
    />
  );
};
