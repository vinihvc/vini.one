import type { TimestampType } from './timestamp'

export type PostType = {
  /**
   * The title of the post
   */
  title: string
  /**
   * The description of the post
   */
  description: string
  /**
   * The tags of the post
   */
  tags: string[]
  /**
   * The slug of the post
   */
  slug: string
} & TimestampType
