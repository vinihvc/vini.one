import { Footer } from '@/components/layout/footer'
import { NoiseBg } from '@/components/layout/noise-bg'

const LandingLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NoiseBg />

      <main className="flex flex-1 flex-col pt-16 md:my-10">{children}</main>

      <Footer />
    </>
  )
}

export default LandingLayout
