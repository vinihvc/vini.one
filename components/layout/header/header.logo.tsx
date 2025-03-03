import { Button } from '@/components/ui/button'
import { Logo } from '@/components/ui/logo'
import { NavLink } from '@/components/ui/nav-link'
import { cn } from '@/lib/cn'

interface HeaderLogoProps
  extends Omit<React.ComponentProps<typeof NavLink>, 'href'> {}

export const HeaderLogo = (props: HeaderLogoProps) => {
  const { className, ...rest } = props

  return (
    <Button
      className={cn(
        'h-auto w-auto border-none bg-foreground/5 p-0 text-foreground hover:bg-foreground/5 [&.active]:bg-foreground/10',
        className,
      )}
      asChild
    >
      <NavLink
        href="/"
        aria-label="Vinicius Vicentini, Back to homepage"
        exact
        {...rest}
      >
        <Logo />
      </NavLink>
    </Button>
  )
}
