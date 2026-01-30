import Script from "next/script";
import { env } from "@/lib/env";

export const UmamiTracking = () => {
  if (process.env.NODE_ENV !== "production") return null;

  return (
    <Script
      data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      src="https://us.umami.is/script.js"
      strategy="lazyOnload"
    />
  );
};
