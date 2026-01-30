"use client";

import * as RDialog from "@radix-ui/react-dialog";
import type React from "react";
import { tv, type VariantProps } from "tailwind-variants";
import { cn } from "@/lib/cn";

export const Sheet = RDialog.Root;

export const SheetTrigger = RDialog.Trigger;

export const SheetClose = RDialog.Close;

export const SheetPortal = RDialog.Portal;

export const SheetTitle = RDialog.Title;

export const SheetDescription = RDialog.Description;

export const SheetOverlay = (
  props: React.ComponentPropsWithoutRef<typeof RDialog.Overlay>
) => {
  const { className, ...rest } = props;

  return (
    <RDialog.Overlay
      className={cn(
        "fixed inset-0 z-50 bg-background/80",
        "data-[state=open]:fade-in-0 data-[state=open]:animate-in",
        "data-[state=closed]:fade-out-0 data-[state=closed]:animate-out",
        className
      )}
      {...rest}
    />
  );
};

SheetOverlay.displayName = RDialog.Overlay.displayName;

const sheetContent = tv({
  base: [
    "fixed z-50",
    "gap-4 p-4",
    "bg-background/50 backdrop-blur-md",
    "transition ease-in-out",
    "data-[state=closed]:animate-out data-[state=open]:animate-in",
    "data-[state=open]:fade-in data-[state=closed]:fade-out",
  ],
  variants: {
    side: {
      left: ["inset-y-0 left-0 h-full w-full sm:w-3/4 sm:max-w-sm"],
      right: ["inset-y-0 right-0 h-full w-full sm:w-3/4 sm:max-w-sm"],
      top: ["inset-x-0 top-0 h-1/3 w-full"],
      bottom: ["inset-x-0 bottom-0 h-1/3 w-full"],
    },
    animation: {
      fade: ["data-[state=open]:fade-in data-[state=closed]:fade-out"],
      "slide-bottom": [
        "data-[state=open]:slide-in-from-bottom data-[state=closed]:slide-out-to-bottom",
      ],
      "slide-top": [
        "data-[state=open]:slide-in-from-top data-[state=closed]:slide-out-to-top",
      ],
      "slide-left": [
        "data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left",
      ],
      "slide-right": [
        "data-[state=open]:slide-in-from-right data-[state=closed]:slide-out-to-right",
      ],
    },
  },
  defaultVariants: {
    side: "left",
  },
});

type Animation = keyof typeof sheetContent.variants.animation;

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof RDialog.Content>,
    Omit<VariantProps<typeof sheetContent>, "animation"> {
  /**
   * Select the animation to use for the sheet
   */
  animation?: Animation[] | Animation;
}

export const SheetContent = (props: SheetContentProps) => {
  const { className, children, side = "left", animation, ...rest } = props;

  const customAnimation = Array.isArray(animation)
    ? animation.map((animation) => sheetContent({ animation }))
    : sheetContent({ animation });

  return (
    <SheetPortal>
      <SheetOverlay />
      <RDialog.Content
        className={cn(sheetContent({ side }), customAnimation, className)}
        {...rest}
      >
        {children}
      </RDialog.Content>
    </SheetPortal>
  );
};
