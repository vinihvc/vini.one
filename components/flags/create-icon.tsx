import React from 'react'
import { cn } from '@/lib/cn'

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'path'> {
  /**
   * The icon title
   */
  title: string
  /**
   * The icon `svg` viewBox
   * @default "0 0 24 24"
   */
  viewBox?: string
  /**
   * If the has a single path, simply copy the path's `d` attribute
   */
  d?: string
  /**
   * The `svg` path or group element
   * @type React.ReactElement | React.ReactElement[]
   */
  path?: React.ReactElement | React.ReactElement[]
  /**
   * Default props automatically passed to the component; overwriteable
   */
  defaultProps?: React.SVGProps<SVGSVGElement>
}

export const createIcon = ({
  viewBox = '0 0 24 24',
  path,
  title,
  d: pathDefinition,
  defaultProps,
}: IconProps) => {
  const defaults = {
    width: '1rem',
    height: '1rem',
    ...defaultProps,
  }

  const Comp = React.forwardRef<SVGSVGElement, IconProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ path: unusedPath, className, ...rest }, ref) => {
      return (
        <svg
          ref={ref}
          className={cn('inline-flex', className)}
          viewBox={viewBox}
          {...defaults}
          {...rest}
        >
          <title>{title}</title>
          {path ?? <path fill="currentColor" d={pathDefinition} />}
        </svg>
      )
    },
  )

  Comp.displayName = 'createIcon'

  return Comp
}
