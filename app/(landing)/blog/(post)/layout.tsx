import { cookies } from 'next/headers'
import React from 'react'
import { BlogPostWrapper } from './_components/wrapper'
import { BlogPostProvider } from './context'
import type { ContainerWidthType, FontFamilyType, FontSizeType } from './data'

const PostSettings = React.lazy(() => import('./_components/settings'))

const getInitialData = async () => {
  const cookieStore = await cookies()

  const fontSize = cookieStore.get('fontSize')
  const containerWidth = cookieStore.get('containerWidth')
  const fontFamily = cookieStore.get('fontFamily')

  return {
    fontSize: fontSize?.value as FontSizeType,
    containerWidth: containerWidth?.value as ContainerWidthType,
    fontFamily: fontFamily?.value as FontFamilyType,
  }
}

const BlogPostLayout = async ({ children }: React.PropsWithChildren) => {
  const initialData = await getInitialData()

  return (
    <BlogPostProvider initialData={initialData}>
      <BlogPostWrapper className="selection:bg-rose-500">
        {children}

        <PostSettings />
      </BlogPostWrapper>
    </BlogPostProvider>
  )
}

export default BlogPostLayout
