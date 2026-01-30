import { Slot } from "@radix-ui/react-slot";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

const badgeVariants = tv({
  base: [
    "inline-flex items-center rounded-sm border",
    "px-2 py-0.5",
    "font-medium text-xs transition-colors",
    "focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  ],
  variants: {
    variant: {
      solid: ["text-foreground", "border-transparent bg-background", "shadow"],
      secondary: [
        "text-secondary-foreground",
        "border-transparent bg-secondary",
      ],
      destructive: [
        "text-destructive-foreground",
        "border-transparent bg-destructive",
      ],
      outline: ["text-foreground"],
    },
  },
  defaultVariants: {
    variant: "solid",
  },
});

export interface BadgeProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof badgeVariants> {
  /**
   * If true, the badge will be rendered as a child element
   */
  asChild?: boolean;
}

export const Badge = (props: BadgeProps) => {
  const { asChild, className, variant, ...rest } = props;

  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={cn(badgeVariants({ variant }), className)}
      {...rest}
    />
  );
};
