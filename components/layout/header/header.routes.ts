import {
  Home,
  MapPin,
  MonitorSmartphone,
  SquarePen,
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
    icon: MonitorSmartphone,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: SquarePen,
  },
]
