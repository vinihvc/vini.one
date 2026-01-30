import { cn } from "@/lib/cn";

const NoiseBg = () => {
  return (
    <>
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 -top-40 -z-1",
          "opacity-50",
          "pointer-events-none",
          "mask-[radial-gradient(circle_at_50%_0%,white_0%,transparent_80%)]",
          "bg-[linear-gradient(to_right,rgba(20_184_166/0.25)_0%,rgba(59_130_246/0.22)_17%,rgba(139_92_246/0.2)_33%,rgba(239_68_68/0.18)_50%,rgba(249_115_22/0.18)_67%,rgba(234_179_8/0.15)_83%,transparent_100%)]"
        )}
      />

      <svg
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 isolate -z-1 h-full min-h-screen w-full opacity-15"
      >
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
