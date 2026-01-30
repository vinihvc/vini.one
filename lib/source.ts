import {
  blog,
  bookshelf,
  projects,
  uses,
} from "fumadocs-mdx:collections/server";
import { loader } from "fumadocs-core/source";

export const bookshelfSource = loader({
  baseUrl: "/bookshelf",
  source: bookshelf.toFumadocsSource(),
});

export const usesSource = loader({
  baseUrl: "/uses",
  source: uses.toFumadocsSource(),
});

export const blogSource = loader({
  baseUrl: "/blog",
  source: blog.toFumadocsSource(),
});

export const projectsSource = loader({
  baseUrl: "/projects",
  source: projects.toFumadocsSource(),
});
