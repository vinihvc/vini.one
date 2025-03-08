import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'
import { cn } from '@/lib/cn'
import { Icons } from '@/lib/icons'

interface HeaderLogoProps
  extends Omit<React.ComponentProps<typeof NavLink>, 'href'> {}

export const HeaderLogo = (props: HeaderLogoProps) => {
  const { className, ...rest } = props

  return (
    <Button
      className={cn(
        'border-none text-foreground hover:bg-foreground/5 [&.active]:bg-foreground/10 [&_svg]:h-5 [&_svg]:w-5',
        className,
      )}
      size="icon"
      asChild
    >
      <NavLink
        href="/"
        aria-label="Vinicius Vicentini, Back to homepage"
        exact
        {...rest}
      >
        <Icons.logo />
      </NavLink>
    </Button>
  )
}
