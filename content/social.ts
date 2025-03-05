import { SEO } from '@/config/seo'

export type SocialType = (typeof SOCIAL)[number]

export const SOCIAL = [
  {
    key: 'github',
    title: 'GitHub',
    url: `${SEO.url}/github`,
  },
  {
    key: 'x',
    title: 'X',
    url: `${SEO.url}/x`,
  },
  {
    key: 'linkedin',
    title: 'LinkedIn',
    url: `${SEO.url}/linkedin`,
  },
  {
    key: 'instagram',
    title: 'Instagram',
    url: `${SEO.url}/instagram`,
  },
  {
    key: 'email',
    title: 'Email',
    url: 'mailto:viniciusvicentini@live.com',
  },
] as const
