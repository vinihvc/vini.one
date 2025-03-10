import { cn } from '@/lib/cn'
import { getTranslations } from 'next-intl/server'
import { RemoveScroll } from 'react-remove-scroll'
import { HeaderLanguage } from './header.language'
import { HeaderLogo } from './header.logo'
import { HeaderNavItem } from './header.nav-item'
import { HEADER_ROUTES } from './header.routes'

interface HeaderProps extends React.ComponentProps<'header'> {}

export const Header = async (props: HeaderProps) => {
  const { className, ...rest } = props

  const t = await getTranslations('components.header.navigation')

  return (
    <header
      className={cn(
        '!max-w-[54rem] container fixed inset-x-0 top-4 z-50 mx-2 selection:bg-yellow-500 max-sm:hidden',
        RemoveScroll.classNames.zeroRight,
      )}
      {...rest}
    >
      <div
        className={cn(
          'h-16',
          'px-3',
          'flex items-center justify-between',
          'bg-black/60 backdrop-blur-md',
          'border border-foreground/5',
          'rounded-xl',
          className,
        )}
      >
        <HeaderLogo />

        <nav className="flex items-center gap-2">
          {HEADER_ROUTES.map((route) => {
            if (route.onlyMobile) return null

            const label = t(route.key)

            return <HeaderNavItem key={route.href} data={{ ...route, label }} />
          })}

          <HeaderLanguage />
        </nav>
      </div>
    </header>
  )
}
