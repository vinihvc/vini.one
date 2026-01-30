import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    CLOUDINARY_CLOUD_NAME: z.string().min(1),
    CLOUDINARY_API_KEY: z.string().min(1),
    CLOUDINARY_API_SECRET: z.string().min(1),
  },
  client: {
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: z.string().min(1),
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN: z.string().min(1),
    NEXT_PUBLIC_MAPBOX_USER_ID: z.string().min(1),
    NEXT_PUBLIC_MAPBOX_STYLE_ID: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN:
      process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN,
    NEXT_PUBLIC_UMAMI_WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID,
    NEXT_PUBLIC_MAPBOX_USER_ID: process.env.NEXT_PUBLIC_MAPBOX_USER_ID,
    NEXT_PUBLIC_MAPBOX_STYLE_ID: process.env.NEXT_PUBLIC_MAPBOX_STYLE_ID,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
  },
});
