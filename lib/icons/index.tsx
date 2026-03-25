import {
  GitHubDark,
  Instagram,
  LinkedIn,
  XDark,
} from "@ridemountainpig/svgl-react";
import { CloudDownload, Crown, Omega, Salad } from "lucide-react";
import { Eletrohits } from "./eletrohits";
import { Logo } from "./logo";
import { SharkIcon } from "./shark";

export const Icons = {
  github: GitHubDark,
  x: XDark,
  linkedin: LinkedIn,
  instagram: Instagram,
  eletrohits: Eletrohits,
  os: Omega,
  apphub: CloudDownload,
  idleval: Crown,
  shark: SharkIcon,
  fit: Salad,
  logo: Logo,
} as const;
