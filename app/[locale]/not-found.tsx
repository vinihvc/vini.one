import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/navigation'
import { getTranslations } from 'next-intl/server'
import React from 'react'

const NoiseBg = React.lazy(() => import('@/components/layout/noise-bg'))

const NotFoundPage = async () => {
  const t = await getTranslations('pages.not-found')

  return (
    <>
      <NoiseBg />

      <main className="container items-center justify-center selection:bg-pink-500">
        <div
          className="fixed top-1/2 left-1/2 h-px w-px animate-zoom rounded-full bg-foreground shadow-2xl"
          style={{
            boxShadow:
              '-24vw -44vh 2px 2px #fff,38vw -4vh 0px 0px #fff,-20vw -48vh 1px 2px #fff,-39vw 38vh 3px 1px #fff,-42vw -11vh 0px 3px #fff,12vw 15vh 3px 3px #fff,42vw 6vh 3px 2px #fff,-8vw 9vh 0px 2px #fff,34vw -38vh 1px 0px #fff,-17vw 45vh 3px 1px #fff,22vw -36vh 3px 2px #fff,-42vw 1vh 1px 0px #fff',
            animation: 'zoom 10s alternate infinite',
          }}
        />

        <div className="z-[2] flex flex-col items-center space-y-10">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-[150px]">{t('title')}</p>

            <div
              className="md:text-xl [&_span]:bg-purple-500 [&_span]:p-1"
              dangerouslySetInnerHTML={{ __html: t.raw('description') }}
            />
          </div>

          <Button size="lg" asChild>
            <Link href="/">{t('cta')}</Link>
          </Button>
        </div>
      </main>
    </>
  )
}

export default NotFoundPage
