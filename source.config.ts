import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { blogSchema } from "./types/blog";
import { bookshelfSchema } from "./types/bookshelf";
import { projectsSchema } from "./types/project";

export const bookshelf = defineDocs({
  dir: "content/bookshelf",
  docs: {
    schema: frontmatterSchema.extend(bookshelfSchema.shape),
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
    schema: frontmatterSchema.extend(blogSchema.shape),
  },
});

export const projects = defineDocs({
  dir: "content/projects",
  docs: {
    schema: frontmatterSchema.extend(projectsSchema.shape),
  },
});

export default defineConfig();
