import { absoluteUrl } from "@/lib/url";

export type SocialType = (typeof SOCIAL)[number];

export const SOCIAL = [
  {
    key: "github",
    title: "GitHub",
    url: absoluteUrl("/github"),
    handle: "@vinihvc",
  },
  {
    key: "x",
    title: "X",
    url: absoluteUrl("/x"),
    handle: "@vinihvc",
  },
  {
    key: "linkedin",
    title: "LinkedIn",
    url: absoluteUrl("/linkedin"),
    handle: "@vinihvc",
  },
  {
    key: "instagram",
    title: "Instagram",
    url: absoluteUrl("/instagram"),
    handle: "@vinihvc",
  },
  {
    key: "email",
    title: "Email",
    url: "mailto:viniciusvicentini@live.com",
    handle: undefined,
  },
] as const;
