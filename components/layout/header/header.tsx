import { cn } from '@/lib/cn'
import dynamic from 'next/dynamic'
import { HeaderLogo } from './header.logo'
import { HEADER_ROUTES } from './header.routes'

const HeaderDesktop = dynamic(() => import('./header.desktop'))
const HeaderMobile = dynamic(() => import('./header.mobile'))

interface HeaderProps extends React.ComponentProps<'header'> {}

const getData = async () => {
  return {
    routes: HEADER_ROUTES,
  }
}

export const Header = async (props: HeaderProps) => {
  const { className, ...rest } = props

  const { routes } = await getData()

  return (
    <header
      className={cn(
        'container fixed inset-x-0 top-2 z-9999 mx-2 selection:bg-yellow-500 sm:top-5',
      )}
      {...rest}
    >
      <div
        className={cn(
          'h-16',
          'px-3',
          'flex items-center justify-between',
          'bg-black/30 backdrop-blur',
          'rounded-xl',
          'shadow-[0px_1px_1px_rgba(0,0,0,.95),0px_0px_1px_inset_#fffbed3c]',
          className,
        )}
      >
        <HeaderLogo />

        <HeaderDesktop className="max-sm:hidden" routes={routes} />

        <HeaderMobile className="sm:hidden" routes={routes} />
      </div>
    </header>
  )
}
