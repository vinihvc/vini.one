import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'
import { cn } from '@/lib/cn'
import type { RouteType } from './header.routes'

interface HeaderNavItemProps
  extends Omit<React.ComponentProps<typeof NavLink>, 'href'> {
  /**
   * Route data
   */
  data: RouteType & { label: string }
}

export const HeaderNavItem = (props: HeaderNavItemProps) => {
  const { data, className, ...rest } = props

  return (
    <Button asChild>
      <NavLink
        href={data.href}
        className={cn(
          'block border-none bg-transparent px-4 py-2 hover:bg-transparent hover:text-foreground [&.active]:text-foreground sm:[&.active]:bg-foreground/5',
          className,
        )}
        {...rest}
      >
        {data.label}
      </NavLink>
    </Button>
  )
}
