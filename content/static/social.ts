import { SITE_CONFIG } from '@/config/site'

export type SocialType = (typeof SOCIAL)[number]

export const SOCIAL = [
  {
    key: 'github',
    title: 'GitHub',
    url: `${SITE_CONFIG.url}/github`,
    handle: '@vinihvc',
  },
  {
    key: 'x',
    title: 'X',
    url: `${SITE_CONFIG.url}/x`,
    handle: '@vinihvc',
  },
  {
    key: 'linkedin',
    title: 'LinkedIn',
    url: `${SITE_CONFIG.url}/linkedin`,
    handle: '@vinihvc',
  },
  {
    key: 'instagram',
    title: 'Instagram',
    url: `${SITE_CONFIG.url}/instagram`,
    handle: '@vinihvc',
  },
  {
    key: 'email',
    title: 'Email',
    url: 'mailto:viniciusvicentini@live.com',
    handle: undefined,
  },
] as const
