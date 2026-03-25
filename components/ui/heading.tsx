import { ark } from "@ark-ui/react/factory";
import type React from "react";
import { cn } from "@/lib/cn";

interface HeadingProps extends React.ComponentProps<"h1"> {
  /**
   * If true, the Heading will be rendered as a child of another component
   *
   * @default false
   */
  asChild?: boolean;
}

export const Heading = (props: HeadingProps) => {
  const { asChild, className, ...rest } = props;

  return (
    <ark.h1
      asChild={asChild}
      className={cn(
        "inline-block bg-linear-to-r bg-clip-text font-bold text-4xl/tight text-transparent",
        className
      )}
      {...rest}
    />
  );
};
