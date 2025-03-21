import { makeSource } from 'contentlayer2/source-files'

import { PostDocument } from './lib/contentlayer/documents/post'
import { TripDocument } from './lib/contentlayer/documents/trip'
import { UsesDocument } from './lib/contentlayer/documents/uses'

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [PostDocument, TripDocument, UsesDocument],
})
