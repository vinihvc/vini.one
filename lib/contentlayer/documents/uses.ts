import { defineDocumentType } from 'contentlayer2/source-files'

export const UsesDocument = defineDocumentType(() => ({
  name: 'Uses',
  filePathPattern: 'uses/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ''),
    },
  },
}))
