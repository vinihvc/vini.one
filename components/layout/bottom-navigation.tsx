import { cn } from '@/lib/cn'
import { Button } from '../ui/button'
import { NavLink } from '../ui/nav-link'
import { HEADER_ROUTES } from './header/header.routes'

interface BottomNavigationProps extends React.ComponentProps<'nav'> {}

const BottomNavigation = (props: BottomNavigationProps) => {
  const { className, ...rest } = props

  return (
    <nav
      className={cn(
        'sticky inset-x-0 bottom-0 z-60 sm:hidden',
        'flex items-center justify-center',
        'bg-black/60 backdrop-blur-md',
        'p-2 pb-safe-or-2',
        'border-foreground/10 border-t',
        className,
      )}
      {...rest}
    >
      <ul className="flex w-full items-center justify-center gap-2">
        {HEADER_ROUTES.map((route) => (
          <li key={route.href} className="w-full">
            <Button
              variant="ghost"
              className="w-full px-0 [&_svg]:h-5 [&_svg]:w-5"
              size="lg"
              asChild
            >
              <NavLink
                className="text-muted-foreground [&.active]:bg-foreground/10 [&.active]:text-foreground"
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

export default BottomNavigation
