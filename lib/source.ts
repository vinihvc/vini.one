import {
  blog,
  bookshelf,
  projects,
  recipes,
  trips,
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

export const tripsSource = loader({
  baseUrl: "/trips",
  source: trips.toFumadocsSource(),
});

export const recipesSource = loader({
  baseUrl: "/recipes",
  source: recipes.toFumadocsSource(),
});
