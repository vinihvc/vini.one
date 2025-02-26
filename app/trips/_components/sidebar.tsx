'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { NavLink } from '@/components/ui/nav-link'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/cn'
import type { TripType } from '@/types/trip'
import { Plus, Search } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

interface TripSidebarProps
  extends React.ComponentPropsWithoutRef<typeof Sheet> {
  /**
   * The data of the routes
   */
  data: TripType[]
}

const TripSidebar = (props: TripSidebarProps) => {
  const { data, ...rest } = props

  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Sheet modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className={cn(
          'fixed bottom-5 left-5 z-50',
          'data-[state=closed]:visible data-[state=open]:invisible',
        )}
        asChild
      >
        <Button
          className="[&_svg]:h-5 [&_svg]:w-5"
          variant="primary"
          size="icon"
        >
          <Plus />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="left"
        animation={['fade']}
        className="group flex flex-col rounded-lg bg-transparent p-0 sm:w-[360px]"
        {...rest}
      >
        <div className="flex-1 rounded-lg bg-background/50 p-4 backdrop-blur-sm">
          <SheetTitle className="sr-only">Search for places</SheetTitle>

          <SheetDescription className="sr-only">
            View of all my trips
          </SheetDescription>

          <div className="border-b">
            <div className="relative">
              <Search className="absolute top-2.5 left-2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for places"
                className="ps-8 ring-blue-500"
              />
            </div>
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 rounded-none">
            {data.map((trip) => (
              <NavLink
                key={trip.slug}
                className="flex w-full rounded-lg ring-blue-500"
                href={`/trips/${trip.slug}`}
              >
                <article className="flex w-full items-center gap-4 border-b p-4">
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-lg">
                    <Image
                      src={trip.thumbnails[0] ?? ''}
                      width={64}
                      height={64}
                      alt={trip.title}
                      className="h-16 w-16 object-cover"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <h3 className="font-medium">{trip.title}</h3>
                  </div>
                </article>
              </NavLink>
            ))}
          </div>

          <div
            className={cn(
              'absolute bottom-4 left-4',
              'group-data-[state=closed]:animate-out group-data-[state=open]:animate-in',
              'group-data-[state=open]:fade-in-0 group-data-[state=closed]:fade-out-0',
              'group-data-[state=closed]:duration-200 group-data-[state=open]:duration-200',
              'group-data-[state=open]:slide-in-from-left-1/2 group-data-[state=closed]:slide-out-to-left-1/2',
              'group-data-[state=open]:slide-in-from-bottom-1/2 group-data-[state=closed]:slide-out-to-bottom-1/2',
            )}
          >
            <SheetClose asChild>
              <Button
                variant="primary"
                className="[&_svg]:h-5 [&_svg]:w-5"
                size="icon"
              >
                <Plus className="transition-all group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-45" />
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default TripSidebar
