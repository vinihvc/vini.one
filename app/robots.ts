import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/url";

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
};

export default robots;
