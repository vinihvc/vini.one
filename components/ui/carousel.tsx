"use client";

import { Slot } from "@radix-ui/react-slot";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

interface CarouselProps {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

const useCarousel = () => {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
};

export const Carousel = ({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & CarouselProps) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y",
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) {
      return;
    }

    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );

  React.useEffect(() => {
    if (!(api && setApi)) {
      return;
    }

    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api,
        opts,
        orientation:
          orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <section
        className={cn("relative", className)}
        onKeyDownCapture={handleKeyDown}
        {...props}
      >
        {children}
      </section>
    </CarouselContext.Provider>
  );
};

export const CarouselContent = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div className="overflow-hidden" ref={carouselRef}>
      <div
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
};

interface CarouselItemProps extends React.ComponentProps<"div"> {
  /**
   * Whether to use a custom component for the item
   */
  asChild?: boolean;
}

export const CarouselItem = (props: CarouselItemProps) => {
  const { className, asChild, ...rest } = props;

  const { orientation } = useCarousel();

  const Component = asChild ? Slot : "div";

  return (
    <Component
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      role="group"
      {...rest}
    />
  );
};

interface CarouselPreviousProps extends React.ComponentProps<typeof Button> {
  /**
   * The text to display on the button
   */
  text: string;
}

export const CarouselPrevious = (props: CarouselPreviousProps) => {
  const {
    className,
    variant = "outline",
    size = "icon",
    text,
    ...rest
  } = props;

  const { scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      className={cn(
        "absolute top-1/2 -left-12 -translate-y-1/2 rounded-full",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      size={size}
      variant={variant}
      {...rest}
    >
      <ArrowLeft />
      <span className="sr-only">{text}</span>
    </Button>
  );
};

interface CarouselNextProps extends React.ComponentProps<typeof Button> {
  /**
   * The text to display on the button
   */
  text: string;
}

export const CarouselNext = (props: CarouselNextProps) => {
  const {
    className,
    variant = "outline",
    size = "icon",
    text,
    ...rest
  } = props;

  const { scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      className={cn(
        "absolute top-1/2 -right-12 -translate-y-1/2 rounded-full",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      size={size}
      variant={variant}
      {...rest}
    >
      <ArrowRight />
      <span className="sr-only">{text}</span>
    </Button>
  );
};
