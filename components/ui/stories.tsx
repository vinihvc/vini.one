"use client";

import type { UseEmblaCarouselType } from "embla-carousel-react";
import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/cn";
import { BlurImage } from "./blur-image";

interface Story {
  url: string;
  width: number;
  height: number;
}

interface StoriesProps extends React.ComponentProps<"div"> {
  /**
   * The stories to display
   */
  data: Story[];
  /**
   * The index of the active story. If provided, the component becomes controlled.
   */
  defaultIndex?: number;
}

export function Stories(props: StoriesProps) {
  const { data, className, defaultIndex, ...rest } = props;

  const [api, setApi] = React.useState<UseEmblaCarouselType[1]>();
  const [internalIndex, setInternalIndex] = React.useState(defaultIndex ?? 0);
  const [progress, setProgress] = React.useState(0);
  const [isFirstRender, setIsFirstRender] = React.useState(true);

  // Use defaultIndex only on first render
  const currentIndex = isFirstRender
    ? (defaultIndex ?? internalIndex)
    : internalIndex;

  const setCurrentIndex = React.useCallback((index: number) => {
    setInternalIndex(index);
    setIsFirstRender(false);
  }, []);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      const newIndex = api.selectedScrollSnap();
      setCurrentIndex(newIndex);
      setProgress(0);
    };

    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api, setCurrentIndex]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          if (currentIndex < data.length - 1) {
            api?.scrollNext();

            return 0;
          }

          return 100;
        }

        return prev + 1;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex, api, data.length]);

  return (
    <div
      className={cn(
        "relative mx-auto flex h-full w-full max-w-4xl items-center justify-center transition-all",
        className
      )}
      {...rest}
    >
      <div className="absolute inset-x-0 top-0 z-10 mx-auto flex max-w-md gap-1 p-2">
        {data.map((story, index) => {
          const isActive = index === currentIndex;
          const isPrev = index < currentIndex;

          return (
            <div
              className="h-1 flex-1 overflow-hidden rounded-full bg-white/30"
              data-active={isActive}
              key={story.url}
            >
              <div
                className={cn(
                  "h-full bg-white transition-all duration-100",
                  isActive ? "w-full" : isPrev ? "w-full" : "w-0"
                )}
                style={{
                  width: isActive ? `${progress}%` : isPrev ? "100%" : "0%",
                }}
              />
            </div>
          );
        })}
      </div>

      <Carousel
        className="w-full"
        opts={{
          align: "center",
          loop: true,
          duration: 2,
          startIndex: currentIndex,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {data.map((story) => (
            <CarouselItem
              className="flex items-center justify-center"
              key={story.url}
            >
              <div className="relative">
                <BlurImage
                  alt="Story"
                  className="w-full object-contain lg:rounded-lg"
                  height={story.height}
                  src={story.url}
                  width={story.width}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious
          className="absolute top-1/2 -left-4 z-10 h-10 w-10 -translate-y-1/2 max-sm:hidden"
          text="Previous slide"
        />

        <CarouselNext
          className="absolute top-1/2 -right-4 z-10 h-10 w-10 -translate-y-1/2 max-sm:hidden"
          text="Next slide"
        />

        <div className="absolute inset-0 flex">
          <button
            className="flex-1 border-0"
            onClick={() => api?.scrollPrev()}
            tabIndex={-1}
            type="button"
          />

          <button
            className="flex-1 border-0"
            onClick={() => api?.scrollNext()}
            tabIndex={-1}
            type="button"
          />
        </div>
      </Carousel>
    </div>
  );
}
