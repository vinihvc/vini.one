'use client'

import Link from 'next/link'

import { Button } from '@/components/ui/button'

interface ErrorProps {
  error: {
    digest?: string
  } & Error
}

const DevErrorPage = (props: ErrorProps) => {
  const { error } = props

  console.error(error)

  return (
    <div className="z-[2] flex flex-col items-center space-y-6">
      <div className="flex flex-col items-center space-y-4 md:text-xl">
        <p className="font-thin text-7xl">😔</p>

        <span className="bg-red-500 p-1">Don&apos;t panic</span>

        <p>Something went wrong, please try again later.</p>
      </div>

      <Button size="xs" asChild>
        <Link href="/">Back to Beginning</Link>
      </Button>
    </div>
  )
}

export default DevErrorPage
