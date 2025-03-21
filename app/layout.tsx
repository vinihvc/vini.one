import { NextIntlClientProvider } from 'next-intl'

interface RootLayoutProps extends React.PropsWithChildren {}

const RootLayout = async (props: RootLayoutProps) => {
  const { children } = props

  return <NextIntlClientProvider>{children}</NextIntlClientProvider>
}

export default RootLayout
