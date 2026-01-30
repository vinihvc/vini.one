import { z } from "zod";

export const recipesSchema = z.object({
  title: z.string(),
  country: z.string(),
  tags: z.array(z.string()),
  thumbnail: z.object({
    path: z.string(),
    alt: z.string(),
  }),
  description: z.string(),
  publishedAt: z.date().or(z.string()),
  status: z.enum(["draft", "published"]),
});

export type RecipeType = z.infer<typeof recipesSchema>;
