import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { blogSchema } from "./types/blog";
import { bookshelfSchema } from "./types/bookshelf";
import { projectsSchema } from "./types/project";
import { recipesSchema } from "./types/recipes";
import { tripsSchema } from "./types/trips";

export const bookshelf = defineDocs({
  dir: "content/bookshelf",
  docs: {
    schema: bookshelfSchema,
  },
});

export const uses = defineDocs({
  dir: "content/uses",
  docs: {
    schema: frontmatterSchema,
  },
});

export const blog = defineDocs({
  dir: "content/blog",
  docs: {
    schema: blogSchema,
  },
});

export const projects = defineDocs({
  dir: "content/projects",
  docs: {
    schema: projectsSchema,
  },
});

export const trips = defineDocs({
  dir: "content/trips",
  docs: {
    schema: tripsSchema,
  },
});

export const recipes = defineDocs({
  dir: "content/recipes",
  docs: {
    schema: recipesSchema,
  },
});

export default defineConfig();
