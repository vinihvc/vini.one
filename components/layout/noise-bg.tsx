import { BlurImage } from "../ui/blur-image";

const NoiseBg = () => {
  return (
    <>
      <BlurImage
        alt="Custom Background"
        className="absolute inset-x-0 top-0 -z-[1] mx-auto opacity-30"
        height={670}
        priority
        src="/images/gradient-bg.png"
        width={1000}
      />

      {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
      <svg className="pointer-events-none fixed inset-0 isolate -z-[1] h-full min-h-screen w-full opacity-15">
        <filter id="noise">
          <feTurbulence
            baseFrequency="0.80"
            numOctaves="4"
            stitchTiles="stitch"
            type="fractalNoise"
          />
        </filter>
        <rect filter="url(#noise)" height="100%" width="100%" />
      </svg>
    </>
  );
};

export default NoiseBg;
