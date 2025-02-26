import {
  Backpack,
  Home,
  MapPin,
  NotebookPen,
  SquareTerminal,
} from 'lucide-react'

export type RouteType = (typeof HEADER_ROUTES)[number]

export const HEADER_ROUTES = [
  {
    href: '/',
    label: 'Home',
    onlyMobile: true,
    icon: Home,
  },

  {
    href: '/projects',
    label: 'Projects',
    icon: SquareTerminal,
  },
  {
    href: '/trips',
    label: 'Trips',
    icon: MapPin,
  },
  {
    href: '/uses',
    label: 'Uses',
    icon: Backpack,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: NotebookPen,
  },
]
