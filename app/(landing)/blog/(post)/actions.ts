'use server'

import { cookies } from 'next/headers'

export const saveFontSize = async (size: string) => {
  const cookieStore = await cookies()

  cookieStore.set('fontSize', size)
}

export const saveContainerWidth = async (width: string) => {
  const cookieStore = await cookies()

  cookieStore.set('containerWidth', width)
}

export const saveFontFamily = async (font: string) => {
  const cookieStore = await cookies()

  cookieStore.set('fontFamily', font)
}

export const resetSettings = async () => {
  const cookieStore = await cookies()

  cookieStore.delete('fontSize')
  cookieStore.delete('containerWidth')
  cookieStore.delete('fontFamily')
}
