import { clsx, type ClassValue } from 'clsx'

export const cn = (...css: ClassValue[]) => clsx(css)
