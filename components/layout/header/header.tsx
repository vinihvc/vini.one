import { cn } from '@/lib/cn'
import dynamic from 'next/dynamic'
import { RemoveScroll } from 'react-remove-scroll'
import { HeaderLogo } from './header.logo'
import { HEADER_ROUTES } from './header.routes'

const HeaderDesktop = dynamic(() => import('./header.desktop'))
const HeaderMobile = dynamic(() => import('./header.mobile'))

interface HeaderProps extends React.ComponentProps<'header'> {}

export const Header = async (props: HeaderProps) => {
  const { className, ...rest } = props

  const routes = HEADER_ROUTES

  return (
    <header
      className={cn(
        'container fixed inset-x-0 top-2 z-50 mx-2 selection:bg-yellow-500 sm:top-5',
        RemoveScroll.classNames.zeroRight,
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

        <HeaderDesktop className="max-sm:hidden" data={routes} />

        <HeaderMobile className="sm:hidden" data={routes} />
      </div>
    </header>
  )
}
