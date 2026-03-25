import z from "zod";

export const projectsSchema = z.object({
  key: z.string(),
  title: z.string(),
  description: z.string(),
  url: z.string(),
  website: z.string(),
  published: z.boolean().default(true),
});

export type ProjectType = z.infer<typeof projectsSchema>;
