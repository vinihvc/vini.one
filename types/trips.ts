import z from "zod";

export const tripsSchema = z.object({
  city: z.string(),
  country: z.string(),
  description: z.string(),
  location: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  thumbnail: z.object({
    path: z.string(),
    alt: z.string(),
  }),
  photos: z.array(z.string()),
  arrivalDate: z.string().or(z.date()),
  departureDate: z.string().or(z.date()),
  publishedAt: z.string().or(z.date()),
  status: z.enum(["draft", "published"]),
});

export type TripType = z.infer<typeof tripsSchema>;
