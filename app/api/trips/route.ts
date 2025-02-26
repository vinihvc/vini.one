import { TRIPS } from '@/content/trips'
import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json({ data: TRIPS })
}
