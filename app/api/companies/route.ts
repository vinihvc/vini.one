import { COMPANIES } from '@/content/companies'
import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json({ data: COMPANIES })
}
