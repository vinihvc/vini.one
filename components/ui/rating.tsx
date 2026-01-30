"use client";

import { Star } from "lucide-react";
import { useId } from "react";
import { cn } from "@/lib/cn";

const MAX_RATING = 5;

interface RatingProps extends React.ComponentProps<"div"> {
  /**
   * The rating value
   */
  value: number;
}

export const Rating = (props: RatingProps) => {
  const { value, className, ...rest } = props;

  const reactId = useId();

  if (value > MAX_RATING || value < 0) {
    throw new Error("Rating must be between 0 and 5");
  }

  return (
    <div
      aria-orientation="horizontal"
      className="flex items-center"
      role="radiogroup"
      {...rest}
    >
      {[...Array(MAX_RATING)].map((_, index) => {
        const position = index + 1;

        return (
          <span
            aria-checked={value > index}
            aria-label={`${position} stars`}
            aria-posinset={position}
            aria-roledescription="rating"
            aria-setsize={MAX_RATING}
            className={cn(
              "text-gray-200 drop-shadow aria-checked:text-yellow-500",
              className
            )}
            id={`rating${reactId}star:${position}`}
            key={`rating${reactId}star:${position}`}
            tabIndex={-1}
          >
            <Star
              className="h-5 w-5 sm:h-6 sm:w-6"
              fill="currentColor"
              stroke="black"
            />
          </span>
        );
      })}

      <span className="sr-only" id={`rating${reactId}`}>
        Rating: {value} out of 5 stars
      </span>
    </div>
  );
};
