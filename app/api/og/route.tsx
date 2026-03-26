import type { Font } from "@takumi-rs/core";
import { ImageResponse } from "@takumi-rs/image-response";
import type { NextRequest } from "next/server";
import { absoluteUrl } from "@/lib/url";
import { DEFAULT_FONT_SIZE } from "@/utils/og-image";

export const revalidate = false;

async function loadAssets(): Promise<
  { name: string; data: ArrayBuffer; weight: number; style: "normal" }[]
> {
  const [semibold] = await Promise.all([
    import("./Outfit-SemiBold.ttf").then((mod) => mod.default ?? mod),
  ]);

  const toArrayBuffer = (base64: string) => {
    const buffer = Buffer.from(base64, "base64");
    return buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength
    );
  };

  return [
    {
      name: "Outfit",
      data: toArrayBuffer(semibold),
      weight: 600,
      style: "normal",
    },
  ];
}

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl;

  const title = searchParams.get("title");
  const fontSize = Number(searchParams.get("fontSize")) || DEFAULT_FONT_SIZE;

  const fonts: Font[] = await loadAssets();

  return new ImageResponse(
    <div
      style={{
        fontFamily: "Outfit",
        backgroundImage: `url(${absoluteUrl("/images/og.webp")})`,
      }}
      tw="h-full w-full flex flex-col items-center justify-center text-white"
    >
      <div tw="flex flex-col w-full h-full justify-between p-20">
        {/* biome-ignore lint/performance/noImgElement: OG image rendering uses <img> directly. */}
        <img
          alt=""
          height={260}
          src="https://github.com/vinihvc.png"
          style={{
            filter: "grayscale(100%)",
          }}
          tw="rounded-full drop-shadow-md"
          width={260}
        />

        <div tw="flex flex-col">
          <h2
            style={{
              fontSize: `${fontSize}px`,
            }}
            tw="flex flex-col tracking-tight leading-tight font-semibold text-left"
          >
            {title}
          </h2>

          <p tw="text-neutral-400 text-5xl absolute bottom-2.5 right-0">
            {new URL(absoluteUrl("/")).host}
          </p>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      format: "webp",
      fonts,
    }
  );
};
