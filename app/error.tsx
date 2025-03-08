'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const NoiseBg = React.lazy(() => import('@/components/layout/noise-bg'))

interface ErrorProps {
  error: {
    digest?: string
  } & Error
}

const DevErrorPage = (props: ErrorProps) => {
  const { error } = props

  console.error(error)

  return (
    <>
      <NoiseBg />

      <main className="items-center justify-center selection:bg-red-500">
        <div className="z-[2] flex flex-col items-center space-y-10">
          <div className="flex flex-col items-center space-y-4 md:text-xl">
            <p className="font-thin text-7xl">😔</p>

            <span className="bg-red-500 p-1">Don&apos;t panic</span>

            <p>Something went wrong, please try again later.</p>
          </div>

          <Button size="lg" asChild>
            <Link href="/">Back to Beginning</Link>
          </Button>
        </div>
      </main>
    </>
  )
}

export default DevErrorPage
