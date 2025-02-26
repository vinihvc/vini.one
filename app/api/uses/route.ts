import { USES } from '@/content/uses'
import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json({ data: USES })
}
