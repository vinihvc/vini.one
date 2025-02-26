import { cn } from '@/lib/cn'
import { RemoveScroll } from 'react-remove-scroll'
import { HeaderLogo } from './header.logo'
import { HeaderNavItem } from './header.nav-item'
import { HEADER_ROUTES } from './header.routes'

interface HeaderProps extends React.ComponentProps<'header'> {}

export const Header = async (props: HeaderProps) => {
  const { className, ...rest } = props

  return (
    <header
      className={cn(
        'container fixed inset-x-0 top-2 z-50 mx-2 selection:bg-yellow-500 max-sm:hidden sm:top-5',
        RemoveScroll.classNames.zeroRight,
      )}
      {...rest}
    >
      <div
        className={cn(
          'h-16',
          'px-3',
          'flex items-center justify-between',
          'bg-black/50 backdrop-blur-md',
          'border border-foreground/5',
          'rounded-xl',
          className,
        )}
      >
        <HeaderLogo />

        <nav className="flex gap-2 max-sm:hidden max-sm:flex-col">
          {HEADER_ROUTES.map((route) => {
            if (route.onlyMobile) return null

            return <HeaderNavItem key={route.href} data={route} />
          })}
        </nav>
      </div>
    </header>
  )
}
