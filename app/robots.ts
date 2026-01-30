import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/config/site";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_CONFIG.url}/sitemap.xml`,
  };
};

export default robots;
