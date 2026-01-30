import type { Page } from "fumadocs-core/source";
import type { DocCollectionEntry } from "fumadocs-mdx/runtime/server";
import type { BlogType } from "@/types/blog";
import type { BookshelfType } from "@/types/bookshelf";
import type { ProjectType } from "@/types/project";
import type { TripType } from "@/types/trips";

export type SerializableTrip = ReturnType<typeof serializeTrip>[number];

export const serializeTrip = (
  trips: Page<DocCollectionEntry<"trips", TripType>>[]
) => {
  return trips.map((trip) => ({
    city: trip.data.city,
    country: trip.data.country,
    description: trip.data.description,
    location: trip.data.location,
    thumbnail: trip.data.thumbnail,
    photos: trip.data.photos,
    arrivalDate: trip.data.arrivalDate,
    departureDate: trip.data.departureDate,
    publishedAt: trip.data.publishedAt,
    status: trip.data.status,
    url: trip.url,
  }));
};

export type SerializableBlog = ReturnType<typeof serializeBlog>[number];

export const serializeBlog = (
  blog: Page<DocCollectionEntry<"blog", BlogType>>[]
) => {
  return blog.map((post) => ({
    title: post.data.title,
    description: post.data.description,
    thumbnail: post.data.thumbnail,
    tags: post.data.tags,
    publishedAt: post.data.publishedAt,
    status: post.data.status,
    url: post.url,
  }));
};

export type SerializableBookshelf = ReturnType<
  typeof serializeBookshelf
>[number];

export const serializeBookshelf = (
  bookshelf: Page<DocCollectionEntry<"bookshelf", BookshelfType>>[]
) => {
  return bookshelf.map((book) => ({
    title: book.data.title,
    rate: book.data.rate,
    author: book.data.author,
    thumbnail: book.data.thumbnail,
  }));
};

export type SerializableProjects = ReturnType<typeof serializeProjects>[number];

export const serializeProjects = (
  projects: Page<DocCollectionEntry<"projects", ProjectType>>[]
) => {
  return projects.map((project) => ({
    title: project.data.title,
    description: project.data.description,
    url: project.data.url,
    website: project.data.website,
  }));
};
