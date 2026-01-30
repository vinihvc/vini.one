import { SiGithub, SiInstagram, SiX } from "@icons-pack/react-simple-icons";
import {
  Album,
  CalendarSearch,
  Clock,
  CloudDownload,
  Crown,
  Linkedin,
  Omega,
  Salad,
  TrendingDown,
} from "lucide-react";
import { Eletrohits } from "./eletrohits";
import { Logo } from "./logo";

export const Icons = {
  github: SiGithub,
  x: SiX,
  linkedin: Linkedin,
  instagram: SiInstagram,
  eletrohits: Eletrohits,
  os: Omega,
  apphub: CloudDownload,
  books: Album,
  clock: Clock,
  idleval: Crown,
  optimizer: TrendingDown,
  date: CalendarSearch,
  fit: Salad,
  logo: Logo,
} as const;
