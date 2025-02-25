import { cn } from '@/lib/cn'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { NavLink } from '@/components/ui/nav-link'

interface HeaderLogoProps extends React.HTMLAttributes<HTMLElement> {}

export const HeaderLogo = (props: HeaderLogoProps) => {
  const { className, ...rest } = props

  return (
    <Button asChild>
      <NavLink
        className={cn(
          'size-auto border-none bg-transparent p-0 text-white hover:bg-white/5 [&.active]:bg-white/5',
          className,
        )}
        href="/"
        aria-label="Vinicius Vicentini, Back to homepage"
        {...rest}
      >
        <Logo />
      </NavLink>
    </Button>
  )
}
