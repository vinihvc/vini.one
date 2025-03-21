import {
  Home,
  MonitorSmartphone,
  SquarePen,
  SquareTerminal,
} from 'lucide-react'

export type RouteType = (typeof HEADER_ROUTES)[number]

export const HEADER_ROUTES = [
  {
    href: '/',
    key: 'home',
    onlyMobile: true,
    icon: Home,
  },
  {
    href: '/projects',
    key: 'projects',
    icon: SquareTerminal,
  },
  {
    href: '/uses',
    key: 'uses',
    icon: MonitorSmartphone,
  },
  {
    href: '/blog',
    key: 'blog',
    icon: SquarePen,
  },
]
