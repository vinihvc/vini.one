'use client'

import React from 'react'
import { resetSettings } from './actions'
import {
  type ContainerWidthType,
  DEFAULT_CONTAINER_WIDTH,
  DEFAULT_FONT_FAMILY,
  DEFAULT_FONT_SIZE,
  type FontFamilyType,
  type FontSizeType,
} from './data'

interface BlogPostContextType {
  /**
   * The font family of the blog post
   */
  fontFamily: string
  /**
   * The font size of the blog post
   */
  fontSize: string
  /**
   * The width of the container
   */
  containerWidth: string
  /**
   * The set font family of the blog post
   */
  setFontFamily: (fontFamily: FontFamilyType) => void
  /**
   * The set font family of the blog post
   */
  setFontSize: (fontSize: FontSizeType) => void
  /**
   * The set container width of the blog post
   */
  setContainerWidth: (containerWidth: ContainerWidthType) => void
  /**
   * The handle reset settings of the blog post
   */
  resetSettings: () => void
}

export const BlogPostContext = React.createContext<BlogPostContextType>(
  {} as BlogPostContextType,
)

interface BlogPostProviderProps extends React.PropsWithChildren {
  initialData?: {
    fontSize?: FontSizeType
    containerWidth?: ContainerWidthType
    fontFamily?: FontFamilyType
  }
}

export const BlogPostProvider = (props: BlogPostProviderProps) => {
  const { initialData, children } = props

  const initialFontSize = initialData?.fontSize || DEFAULT_FONT_SIZE
  const initialContainerWidth =
    initialData?.containerWidth || DEFAULT_CONTAINER_WIDTH
  const initialFontFamily = initialData?.fontFamily || DEFAULT_FONT_FAMILY

  const [fontSize, setFontSize] = React.useState<FontSizeType>(initialFontSize)
  const [containerWidth, setContainerWidth] =
    React.useState<ContainerWidthType>(initialContainerWidth)
  const [fontFamily, setFontFamily] =
    React.useState<FontFamilyType>(initialFontFamily)

  const handleResetSettings = () => {
    setFontSize(DEFAULT_FONT_SIZE)
    setContainerWidth(DEFAULT_CONTAINER_WIDTH)
    setFontFamily(DEFAULT_FONT_FAMILY)

    resetSettings()
  }

  return (
    <BlogPostContext.Provider
      value={{
        fontFamily,
        fontSize,
        containerWidth,
        setFontFamily,
        setFontSize,
        setContainerWidth,
        resetSettings: handleResetSettings,
      }}
    >
      {children}
    </BlogPostContext.Provider>
  )
}

export const useBlogPost = () => {
  const context = React.useContext(BlogPostContext)

  if (!context) {
    throw new Error('useBlogPost must be used within a BlogPostProvider')
  }

  return context
}
