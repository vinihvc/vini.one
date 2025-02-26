import { PROJECTS } from '@/content/projects'
import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json({ data: PROJECTS })
}
