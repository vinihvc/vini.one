import { Footer } from '@/components/layout/footer'
import { NoiseBg } from '@/components/layout/noise-bg'

const LandingLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <NoiseBg />

      <main className="pt-32 md:my-10">{children}</main>

      <Footer />
    </>
  )
}

export default LandingLayout
