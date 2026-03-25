"use client";

import { ark } from "@ark-ui/react/factory";
import React from "react";
import { useInView } from "@/hooks/use-in-view";
import { assignRef } from "@/hooks/use-merge-ref";
import { cn } from "@/lib/cn";

interface FadeUpProps extends React.ComponentProps<typeof ark.div> {
  /**
   * If true, the component will blur the children.
   *
   * @default false
   */
  blur?: boolean;
  /**
   * The delay in seconds before the animation starts.
   *
   * @default 0
   */
  delay?: number;
  /**
   * The duration of the animation.
   *
   * @default 0.4
   */
  duration?: number;
  /**
   * The side of the component to fade up from.
   *
   * @default 'top'
   */
  side?: "top" | "bottom" | "left" | "right";
  /**
   * The threshold of the component.
   *
   * @default 0.1
   */
  threshold?: number;
}

export const FadeSection = (props: FadeUpProps) => {
  const {
    side = "top",
    delay = 0,
    threshold = 0.1,
    duration = 0.2,
    blur = false,
    ref,
    className,
    style,
    ...rest
  } = props;

  const { ref: inViewRef, isInView } = useInView(threshold);

  const mergedRef = React.useCallback(
    (node: HTMLDivElement | null) => {
      assignRef(ref, node);
      assignRef(inViewRef, node);
    },
    [ref, inViewRef]
  );

  const transform = {
    top: {
      initial: "translateY(10px)",
      inView: "translateY(0)",
    },
    bottom: {
      initial: "translateY(-10px)",
      inView: "translateY(0)",
    },
    left: {
      initial: "translateX(-10px)",
      inView: "translateX(0)",
    },
    right: {
      initial: "translateX(10px)",
      inView: "translateX(0)",
    },
  };

  return (
    <ark.div
      className={cn("opacity-0", { "opacity-100": isInView }, className)}
      ref={mergedRef}
      style={{
        transform: transform[side].initial,
        filter: blur ? "blur(2px)" : "none",
        transition: `all ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
        ...style,
        ...(isInView && {
          transform: transform[side].inView,
          filter: blur ? "blur(0px)" : "none",
        }),
      }}
      {...rest}
    />
  );
};
