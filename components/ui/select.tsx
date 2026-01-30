import { ChevronsUpDown } from "lucide-react";
import type * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

const selectVariants = tv({
  base: [
    "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
    "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "appearance-none pr-10",
  ],
  variants: {
    size: {
      xs: "h-8",
      sm: "h-9",
      md: "h-10",
      lg: "h-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  /**
   * The function to call when the value changes
   */
  onValueChange: (value: string) => void;
}

export const Select = (props: SelectProps) => {
  const { size, className, onValueChange, ...rest } = props;

  return (
    <div className="relative w-full">
      <select
        className={cn(selectVariants({ size }), className)}
        onChange={(e) => onValueChange(e.target.value)}
        {...rest}
      />

      <ChevronsUpDown
        aria-hidden
        className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  );
};

export interface SelectItemProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export const SelectItem = (props: SelectItemProps) => {
  const { className, ...rest } = props;

  return (
    <option className={cn("flex items-center gap-2", className)} {...rest} />
  );
};
