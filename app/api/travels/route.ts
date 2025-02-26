import { TRAVEL } from '@/content/travel'
import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export const GET = async () => {
  return NextResponse.json({ data: TRAVEL })
}
