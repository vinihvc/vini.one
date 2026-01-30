import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [20, 70],
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/rss",
        destination: "/rss.xml",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/vinihvc",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/vinihvc",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://twitter.com/vinihvc",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/vinihvc",
        permanent: true,
      },
      {
        source: "/instagram",
        destination: "https://www.instagram.com/vinihvc",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        destination: "/api/feed",
        source: "/feed",
      },
    ];
  },
};

const withMDX = createMDX();

export default withMDX(nextConfig);
