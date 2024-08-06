import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import robotsTxt from "astro-robots-txt";
import sitemap from "astro-sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    }),
    sitemap({
      filter: (page) => !page.includes("/404"), // Optional: Exclude 404 page from sitemap
      hostname: "https://izluiszi.github.io/", // Replace with your actual site URL
    }),
  ],
  site: "https://izluiszi.github.io/",
});
