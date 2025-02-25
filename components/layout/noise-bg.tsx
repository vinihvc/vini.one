
import Image from 'next/image'

export const NoiseBg = () => {
  return (
    <>
      <Image
        src="/images/gradient-bg.png"
        alt="Custom Background"
        className='-z-[1] absolute inset-x-0 top-10 mx-auto opacity-30 sm:top-0'
        width={1000}
        height={670}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />

      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg className='-z-[1] pointer-events-none fixed inset-0 isolate size-full min-h-screen opacity-15'>
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
