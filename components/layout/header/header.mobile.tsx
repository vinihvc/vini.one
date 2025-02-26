import { cn } from '@/lib/cn'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'

import { HeaderLogo } from './header.logo'
import { HeaderNavItem } from './header.nav-item'
import type { RouteType } from './header.routes'

interface HeaderMobileProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The data of the routes
   */
  data: RouteType[]
}

const HeaderMobile = (props: HeaderMobileProps) => {
  const { data, className, ...rest } = props

  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button
          className={cn('[&_svg]:h-6 [&_svg]:w-6', className)}
          variant="ghost"
          size="icon"
          {...rest}
        >
          <Menu />
          <div className="sr-only">Open menu</div>
        </Button>
      </SheetTrigger>

      <SheetContent animation="fade">
        <SheetTitle className="sr-only">Menu</SheetTitle>

        <SheetDescription className="sr-only">
          Navigate through my site
        </SheetDescription>

        <SheetClose asChild>
          <HeaderLogo className="zoom-in-50 mb-20 inline-block origin-top-left scale-150 transform-gpu animate-in rounded-md bg-foreground/10" />
        </SheetClose>

        <nav className="space-y-14">
          {data.map((route) => (
            <SheetClose key={route.href} asChild>
              <HeaderNavItem
                className="fade-in slide-in-from-left-4 transform-gpu animate-in font-bold text-5xl duration-500"
                data={route}
              />
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default HeaderMobile
