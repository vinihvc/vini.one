import { BrFlag } from '@/lib/flags/br'
import { IeFlag } from '@/lib/flags/ie'
import { ItFlag } from '@/lib/flags/it'
import { MxFlag } from '@/lib/flags/mx'
import React from 'react'

export const FLAG_MAP: Record<string, React.ReactElement> = {
  br: <BrFlag />,
  ie: <IeFlag />,
  mx: <MxFlag />,
  it: <ItFlag />,
}

interface FlagIconProps extends React.SVGProps<SVGSVGElement> {
  /**
   * The country of the flag
   */
  country: keyof typeof FLAG_MAP
}

export const FlagIcon = (props: FlagIconProps) => {
  const { country, ...rest } = props

  const Flag = FLAG_MAP[country]

  if (!Flag) {
    throw new Error(`Flag not found for country: ${country}`)
  }

  return React.cloneElement(Flag, rest)
}
