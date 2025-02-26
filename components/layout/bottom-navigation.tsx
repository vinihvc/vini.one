import { cn } from '@/lib/cn'
import { Button } from '../ui/button'
import { NavLink } from '../ui/nav-link'
import { HEADER_ROUTES } from './header/header.routes'

interface BottomNavigationProps extends React.ComponentProps<'nav'> {}

export const BottomNavigation = (props: BottomNavigationProps) => {
  const { className, ...rest } = props

  return (
    <nav
      className={cn(
        'sticky inset-x-0 bottom-0 z-60 flex h-16 items-center justify-center bg-black/50 backdrop-blur-sm sm:hidden',
        'border-foreground/20 border-t pb-safe-area-2',
        className,
      )}
      {...rest}
    >
      <ul className="flex w-full items-center justify-center gap-2 px-2">
        {HEADER_ROUTES.map((route) => (
          <li key={route.href} className="w-full">
            <Button
              variant="ghost"
              className="w-full px-0 [&_svg]:h-4.5 [&_svg]:w-4.5"
              size="lg"
              asChild
            >
              <NavLink
                className="[&.active]:bg-foreground/10 [&.active]:text-foreground"
                exact={route.href === '/'}
                href={route.href}
              >
                <route.icon />
                <span className="sr-only">{route.label}</span>
              </NavLink>
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
