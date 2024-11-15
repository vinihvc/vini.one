import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Meteors } from '@/components/layout/meteors'

const NotFoundPage = () => {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="absolute inset-0 overflow-x-hidden">
        <Meteors number={30} />
      </div>

      <div
        className="animate-zoom fixed left-1/2 top-1/2 size-px rounded-full bg-white shadow-2xl"
        style={{
          boxShadow:
            '-24vw -44vh 2px 2px #fff,38vw -4vh 0px 0px #fff,-20vw -48vh 1px 2px #fff,-39vw 38vh 3px 1px #fff,-42vw -11vh 0px 3px #fff,12vw 15vh 3px 3px #fff,42vw 6vh 3px 2px #fff,-8vw 9vh 0px 2px #fff,34vw -38vh 1px 0px #fff,-17vw 45vh 3px 1px #fff,22vw -36vh 3px 2px #fff,-42vw 1vh 1px 0px #fff',
          animation: 'zoom 10s alternate infinite',
        }}
      />

      <div className="z-[2] flex flex-col items-center space-y-10">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-[150px] font-thin">404</p>

          <div className="md:text-xl">
            <span className="bg-purple-500 p-1">Don&apos;t panic</span>, but
            this page doesn&apos;t exist.
          </div>
        </div>

        <Button size="lg" asChild>
          <Link href="/">Back to Beginning</Link>
        </Button>
      </div>
    </div>
  )
}

export default NotFoundPage
