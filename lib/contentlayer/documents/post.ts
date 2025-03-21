import { defineDocumentType } from 'contentlayer2/source-files'

const tags = ['travel', 'life']

export const PostDocument = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: 'posts/**/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
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
    tags: { type: 'list', of: { type: 'enum', options: tags }, required: true },
    language: {
      type: 'enum',
      options: ['en', 'br'],
      required: false,
    },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) =>
        doc._raw.sourceFileName
          // hello-world.mdx => hello-world
          .replace(/\.mdx$/, ''),
    },
    language: {
      type: 'enum',
      options: ['en', 'br'],
      resolve: (doc) => doc.language || 'br',
    },
  },
}))
