import z from "zod";

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  thumbnail: z.object({
    path: z.string(),
    alt: z.string(),
  }),
  tags: z.array(z.string()),
  publishedAt: z.string().or(z.date()),
  status: z.enum(["draft", "published"]),
});

export type BlogType = z.infer<typeof blogSchema>;
