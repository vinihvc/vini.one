import {
  Home,
  MonitorSmartphone,
  SquarePen,
  SquareTerminal,
} from "lucide-react";

export type RouteType = (typeof HEADER_ROUTES)[number];

export const HEADER_ROUTES = [
  {
    href: "/",
    key: "home",
    label: "Home",
    onlyMobile: true,
    icon: Home,
  },
  {
    href: "/projects",
    key: "projects",
    label: "Projects",
    icon: SquareTerminal,
  },
  {
    href: "/uses",
    key: "uses",
    label: "Uses",
    icon: MonitorSmartphone,
  },
  {
    href: "/blog",
    key: "blog",
    label: "Blog",
    icon: SquarePen,
  },
];
