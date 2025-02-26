import { cn } from '@/lib/cn'

import { HeaderNavItem } from './header.nav-item'
import type { RouteType } from './header.routes'

interface HeaderDesktopProps extends React.ComponentProps<'nav'> {
  /**
   * The data of the routes
   */
  data: RouteType[]
}

const HeaderDesktop = (props: HeaderDesktopProps) => {
  const { data, className, ...rest } = props

  return (
    <nav className={cn('flex gap-2 max-sm:flex-col', className)} {...rest}>
      {data.map((route) => (
        <HeaderNavItem key={route.href} data={route} />
      ))}
    </nav>
  )
}

export default HeaderDesktop
