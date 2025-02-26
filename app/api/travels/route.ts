import { TRAVEL } from '@/content/travel'
import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json({ data: TRAVEL })
}
