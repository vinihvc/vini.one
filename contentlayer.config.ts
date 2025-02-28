import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Post = defineDocumentType(() => ({
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

export const Trip = defineDocumentType(() => ({
  name: 'Trip',
  filePathPattern: 'trips/**/*.mdx',
  contentType: 'mdx',
  fields: {
    city: { type: 'string', required: true },
    country: { type: 'string', required: true },
    description: { type: 'string', required: true },
    location: {
      type: 'json',
      properties: {
        latitude: { type: 'number', required: true },
        longitude: { type: 'number', required: true },
      },
    },
    thumbnail: {
      type: 'json',
      properties: {
        path: { type: 'string', required: true },
        alt: { type: 'string', required: true },
      },
    },
    photos: { type: 'list', of: { type: 'string' }, required: true },
    arrivalDate: { type: 'date', required: true },
    departureDate: { type: 'date', required: true },
    publishedAt: { type: 'date', required: true },
    updatedAt: { type: 'date', required: false },
    status: { type: 'enum', options: ['draft', 'published'], required: true },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) =>
        `${doc.city.toLowerCase().replace(/\s+/g, '-')}-${doc.country.toLowerCase().replace(/\s+/g, '-')}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Trip],
})
