import { SiGithub, SiInstagram, SiX } from '@icons-pack/react-simple-icons'
import {
  Album,
  CalendarSearch,
  Clock,
  Linkedin,
  Omega,
  Salad,
  Swords,
  TrendingDown,
} from 'lucide-react'
import { Eletrohits } from './eletrohits'
import { Logo } from './logo'

export const Icons = {
  github: SiGithub,
  x: SiX,
  linkedin: Linkedin,
  instagram: SiInstagram,
  eletrohits: Eletrohits,
  os: Omega,
  books: Album,
  clock: Clock,
  adventure: Swords,
  optimizer: TrendingDown,
  date: CalendarSearch,
  fit: Salad,
  logo: Logo,
} as const
