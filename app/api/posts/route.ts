import { allPosts } from '@/.contentlayer/generated'
import { NextResponse } from 'next/server'

export const GET = async () => {
  return NextResponse.json({ data: allPosts })
}
