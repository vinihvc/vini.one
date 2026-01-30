"use client";

import { Slot } from "@radix-ui/react-slot";
import { useInView } from "@/hooks/use-in-view";
import { useMergeRefs } from "@/hooks/use-merge-ref";
import { cn } from "@/lib/cn";

interface FadeUpProps extends React.ComponentProps<"div"> {
  /**
   * The side of the component to fade up from.
   *
   * @default 'top'
   */
  side?: "top" | "bottom" | "left" | "right";
  /**
   * The delay in seconds before the animation starts.
   *
   * @default 0
   */
  delay?: number;
  /**
   * The threshold of the component.
   *
   * @default 0.1
   */
  threshold?: number;
  /**
   * The duration of the animation.
   *
   * @default 0.4
   */
  duration?: number;
  /**
   * If true, the component will blur the children.
   *
   * @default false
   */
  blur?: boolean;
  /**
   * If true, the component will render the children as a React node.
   *
   * @default false
   */
  asChild?: boolean;
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
    asChild,
    ...rest
  } = props;

  const { ref: $ref, isInView } = useInView(threshold);

  const Component = asChild ? Slot : "div";

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
    <Component
      className={cn("opacity-0", { "opacity-100": isInView }, className)}
      ref={useMergeRefs(ref, $ref)}
      style={{
        transform: transform[side].initial,
        filter: blur ? "blur(2px)" : "none",
        transition: `all ${duration}s ease-out`,
        transitionDelay: `${delay}s`,
        ...(isInView && {
          transform: transform[side].inView,
          filter: blur ? "blur(0px)" : "none",
        }),
      }}
      {...rest}
    />
  );
};
