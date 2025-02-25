'use client'

import { cn } from '@/lib/cn'
import * as RDialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import React from 'react'

import { Button } from './button'

export const Sheet = RDialog.Root

export const SheetTrigger = RDialog.Trigger

export const SheetClose = RDialog.Close

export const SheetPortal = RDialog.Portal

export const SheetTitle = RDialog.Title

export const SheetDescription = RDialog.Description

export const SheetOverlay = React.forwardRef<
  React.ComponentRef<typeof RDialog.Overlay>,
  React.ComponentPropsWithoutRef<typeof RDialog.Overlay>
>(({ className, ...props }, ref) => (
  <RDialog.Overlay
    className={cn(
      'fixed inset-0 z-50 bg-black/80',
      'data-[state=open]:fade-in-0 data-[state=open]:animate-in',
      'data-[state=closed]:fade-out-0 data-[state=closed]:animate-out',
      className,
    )}
    {...props}
    ref={ref}
  />
))

SheetOverlay.displayName = RDialog.Overlay.displayName

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof RDialog.Content> {}

export const SheetContent = React.forwardRef<
  React.ComponentRef<typeof RDialog.Content>,
  SheetContentProps
>(({ className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <RDialog.Content
      ref={ref}
      className={cn(
        'fixed inset-y-0 left-0 z-50 size-full gap-4 bg-background/50 p-4 backdrop-blur sm:w-3/4 sm:max-w-sm',
        'transition ease-in-out',
        'data-[state=open]:fade-in data-[state=open]:animate-in data-[state=open]:duration-500',
        'data-[state=closed]:fade-out data-[state=closed]:animate-out data-[state=closed]:duration-300',
        className,
      )}
      {...props}
    >
      {children}
      <RDialog.Close className="absolute top-4 right-3" asChild>
        <Button
          className="sm:hidden max-sm:[&_svg]:h-6 max-sm:[&_svg]:w-6"
          variant="ghost"
          size="icon"
        >
          <X />
          <span className="sr-only">Close</span>
        </Button>
      </RDialog.Close>
    </RDialog.Content>
  </SheetPortal>
))

SheetContent.displayName = RDialog.Content.displayName
