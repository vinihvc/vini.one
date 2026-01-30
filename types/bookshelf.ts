import z from "zod";

export const bookshelfSchema = z.object({
  title: z.string(),
  rate: z.number().min(0).max(5),
  author: z.string(),
  thumbnail: z.string(),
});

export type BookshelfType = z.infer<typeof bookshelfSchema>;
