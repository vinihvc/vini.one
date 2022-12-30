import NextLink from 'next/link'

import { Box } from '@/components/primitives/box'
import { Stack } from '@/components/primitives/stack'

import { Container } from '@/components/container'
import { Logo } from '@/components/logo'

import { HeaderLinks } from '@/components/header/header.links'
import { HeaderMobile } from '@/components/header/header.mobile'

export const Header = () => {
  return (
    <Box as="header">
      <Container
        size="xl"
        css={{
          d: 'flex',
          justify: 'space-between',
          align: 'center',
          h: 70,
        }}
      >
        <NextLink href="/" aria-label="Back to homepage">
          <Logo />
        </NextLink>

        <Stack
          as="nav"
          css={{
            $$gap: '$space$3',
            d: 'none',

            '@sm': {
              d: 'flex',
            },
          }}
        >
          <HeaderLinks />
        </Stack>

        <HeaderMobile css={{ '@sm': { d: 'none' } }} />
      </Container>
    </Box>
  )
}
