import { Button } from '@/components/ui/button'
import { NavLink } from '@/components/ui/nav-link'
import { SOCIAL_LINKS } from '@/config/social'
import { cn } from '@/lib/cn'

interface SocialLinksProps extends React.ComponentProps<'div'> {}

export const SocialLinks = (props: SocialLinksProps) => {
  const { className, ...rest } = props

  return (
    <div className={cn('flex gap-2', className)} {...rest}>
      {SOCIAL_LINKS.map((link) => (
        <Button
          key={link.link}
          aria-label={`Visit my ${link.title}`}
          className="h-9 w-9 border bg-background text-foreground ring-orange-500 hover:border-orange-500 hover:bg-background/80"
          size="icon"
          asChild
        >
          <NavLink href={link.link} isExternal>
            <link.icon aria-hidden />

            <span className="sr-only">{`Visit my ${link.title}`}</span>
          </NavLink>
        </Button>
      ))}
    </div>
  )
}
