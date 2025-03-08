import { BlurImage } from '../ui/blur-image'

const NoiseBg = () => {
  return (
    <>
      <BlurImage
        src="/images/gradient-bg.png"
        alt="Custom Background"
        className="-z-[1] absolute inset-x-0 top-0 mx-auto opacity-30"
        width={1000}
        height={670}
        priority
      />

      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg className="-z-[1] pointer-events-none fixed inset-0 isolate h-full min-h-screen w-full opacity-15">
        <filter id="noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noise)" />
      </svg>
    </>
  )
}

export default NoiseBg
