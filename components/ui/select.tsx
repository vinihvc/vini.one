import { ChevronsUpDown } from "lucide-react";
import type * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

const nativeSelectVariants = tv({
  base: [
    "w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background",
    "outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive",
    "appearance-none pr-10",
  ],
  variants: {
    size: {
      xs: "h-7 text-xs",
      sm: "h-9",
      md: "h-10",
      lg: "h-12",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof nativeSelectVariants> {}

export const NativeSelect = (props: NativeSelectProps) => {
  const { size, className, ...rest } = props;

  return (
    <div className="relative w-full">
      <select
        className={cn(nativeSelectVariants({ size }), className)}
        {...rest}
      />

      <ChevronsUpDown
        aria-hidden
        className="absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  );
};

export interface NativeSelectOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

export const NativeSelectOption = (props: NativeSelectOptionProps) => {
  const { className, ...rest } = props;

  return <option className={cn(className)} {...rest} />;
};

export interface NativeSelectOptGroupProps
  extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {}

export const NativeSelectOptGroup = (props: NativeSelectOptGroupProps) => {
  const { className, ...rest } = props;

  return <optgroup className={cn(className)} {...rest} />;
};
