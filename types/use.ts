interface UseItem {
  /**
   * The title of the use
   */
  title: string
  /**
   * The description of the use
   */
  description: string
  /**
   * The link of the use
   */
  link?: string
}

export type UseType = {
  /**
   * The title of the uses
   */
  title: string
  /**
   * The items of the uses
   */
  items: UseItem[]
}
