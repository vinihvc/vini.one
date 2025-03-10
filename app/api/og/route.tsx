import { DEFAULT_FONT_SIZE } from '@/utils/create-og-image'
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'

import { SITE_CONFIG } from '@/config/site'

export const runtime = 'edge'

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl

  const title = searchParams.get('title')
  const fontSize = Number(searchParams.get('fontSize')) || DEFAULT_FONT_SIZE

  const fontData = await fetch(
    new URL('../../../assets/fonts/Outfit-SemiBold.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    <div
      tw="h-full w-full flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: 'url(https://vini.one/images/og.jpg)',
      }}
    >
      <div tw="flex flex-col w-full h-full justify-between p-20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          tw="rounded-full drop-shadow-md"
          src="https://github.com/vinihvc.png"
          alt=""
          width={260}
          height={260}
          style={{
            filter: 'grayscale(100%)',
          }}
        />

        <div tw="flex flex-col">
          <h2
            tw="flex flex-col tracking-tight leading-tight font-semibold text-left"
            style={{
              fontSize: `${fontSize}px`,
            }}
          >
            {title}
          </h2>

          <p tw="text-neutral-400 text-5xl absolute bottom-0 right-0">
            {SITE_CONFIG.url.replace('https://', '')}
          </p>
        </div>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Outfit',
          data: fontData,
          style: 'normal',
        },
      ],
    },
  )
}
