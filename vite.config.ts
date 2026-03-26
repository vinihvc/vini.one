import tailwindcss from "@tailwindcss/vite";
import mdx from "fumadocs-mdx/vite";
import { nitro } from "nitro/vite";
import vinext from "vinext";
import { defineConfig } from "vite";
// biome-ignore lint/performance/noNamespaceImport: it's ok
import * as MdxConfig from "./source.config";

export default defineConfig({
  nitro: {
    preset: "vercel",
  },
  // Avoid Vite from bundling React contexts and duplicated context conflicts (fumadocs template).
  optimizeDeps: {
    exclude: ["fumadocs-ui", "fumadocs-core"],
    include: [
      "fumadocs-ui > debug",
      "fumadocs-core > extend",
      "fumadocs-mdx > extend",
      "fumadocs-core > style-to-js",
      "fumadocs-mdx > style-to-js",
      "@unpic/react",
    ],
  },
  plugins: [tailwindcss(), mdx(MdxConfig), vinext(), nitro()],
});
