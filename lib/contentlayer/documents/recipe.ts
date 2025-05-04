import { defineDocumentType } from 'contentlayer2/source-files'

export const RecipeDocument = defineDocumentType(() => ({
  name: 'Recipe',
  filePathPattern: 'recipes/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    country: {
      type: 'enum',
      options: ['br', 'mx'],
      required: true,
    },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    thumbnail: {
      type: 'json',
      properties: {
        path: { type: 'string', required: true },
        alt: { type: 'string', required: true },
      },
    },
    publishedAt: { type: 'date', required: true },
    updatedAt: { type: 'date', required: false },
    status: { type: 'enum', options: ['draft', 'published'], required: true },
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
