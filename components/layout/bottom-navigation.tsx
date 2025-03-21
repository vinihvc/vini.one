import { cn } from '@/lib/cn'
import { getTranslations } from 'next-intl/server'
import { Button } from '../ui/button'
import { NavLink } from '../ui/nav-link'
import { SwitchLanguage } from '../ui/switch-language'
import { HEADER_ROUTES } from './header/header.routes'

interface BottomNavigationProps extends React.ComponentProps<'nav'> {}

const BottomNavigation = async (props: BottomNavigationProps) => {
  const { className, ...rest } = props

  const t = await getTranslations('components.header.navigation')

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
              className="w-full px-0 [&_svg]:h-5 [&_svg]:w-5"
              variant="ghost"
              size="lg"
              asChild
            >
              <NavLink
                className="text-muted-foreground [&.active]:bg-foreground/10 [&.active]:text-foreground"
                exact={route.href === '/'}
                href={route.href}
              >
                <route.icon />

                <span className="sr-only">{t(route.key)}</span>
              </NavLink>
            </Button>
          </li>
        ))}

        <li className="w-full">
          <Button
            className="[&_svg]:h-5 [&_svg]:w-5"
            variant="ghost"
            size="lg"
            asChild
          >
            <SwitchLanguage />
          </Button>
        </li>
      </ul>
    </nav>
  )
}

export default BottomNavigation
