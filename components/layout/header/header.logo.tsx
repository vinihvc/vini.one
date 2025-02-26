import { cn } from '@/lib/cn'

import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { NavLink } from '@/components/ui/nav-link'

interface HeaderLogoProps
  extends Omit<React.ComponentProps<typeof NavLink>, 'href'> {}

export const HeaderLogo = (props: HeaderLogoProps) => {
  const { className, ...rest } = props

  return (
    <Button
      className={cn(
        'h-auto w-auto border-none bg-transparent p-0 text-foreground hover:bg-foreground/5 [&.active]:bg-foreground/5',
        className,
      )}
      asChild
    >
      <NavLink
        href="/"
        aria-label="Vinicius Vicentini, Back to homepage"
        {...rest}
      >
        <Logo />
      </NavLink>
    </Button>
  )
}
