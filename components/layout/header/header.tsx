import { cn } from '@/lib/cn'
import dynamic from 'next/dynamic'
import { HeaderLogo } from './header.logo'
import { HEADER_ROUTES } from './header.routes'

const HeaderDesktop = dynamic(() => import('./header.desktop'))
const HeaderMobile = dynamic(() => import('./header.mobile'))

interface HeaderProps extends React.HTMLAttributes<HTMLElement> {}

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
      className={cn('sticky inset-x-0 top-2 z-50 mx-2 sm:top-5', className)}
      {...rest}
    >
      <div className="container flex h-16 items-center justify-between rounded-xl bg-black/30 shadow-[0px_1px_1px_rgba(0,0,0,.95),0px_0px_1px_inset_#fffbed3c] backdrop-blur">
        <HeaderLogo />

        <HeaderDesktop className="max-sm:hidden" routes={routes} />

        <HeaderMobile className="sm:hidden" routes={routes} />
      </div>
    </header>
  )
}
