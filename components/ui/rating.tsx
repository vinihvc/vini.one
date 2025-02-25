'use client'

import { useId } from 'react'
import { cn } from '@/lib/cn'
import { Star } from 'lucide-react'

const MAX_RATING = 5

interface RatingProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The rating value
   */
  value: number
}

export const Rating = (props: RatingProps) => {
  const { value, className, ...rest } = props

  const reactId = useId()

  if (value > MAX_RATING || value < 0) {
    throw new Error('Rating must be between 0 and 5')
  }

  return (
    <div
      className="flex items-center"
      role="radiogroup"
      aria-orientation="horizontal"
      {...rest}
    >
      {[...Array(MAX_RATING)].map((_, index) => {
        const position = index + 1

        return (
          <span
            id={`rating${reactId}star:${position}`}
            key={`rating${reactId}star:${position}`}
            className={cn(
              'text-gray-200 drop-shadow aria-checked:text-yellow-500',
              className,
            )}
            role="radio"
            aria-roledescription="rating"
            aria-label={`${position} stars`}
            aria-checked={value > index}
            aria-posinset={position}
            aria-setsize={MAX_RATING}
            tabIndex={-1}
          >
            <Star
              className="size-5 sm:size-6"
              fill="currentColor"
              stroke="black"
            />
          </span>
        )
      })}

      <span id={`rating${reactId}`} className="sr-only">
        Rating: {value} out of 5 stars
      </span>
    </div>
  )
}
