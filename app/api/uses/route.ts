import { getUses } from '@/services/requests'
import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json({ data: getUses })
}
