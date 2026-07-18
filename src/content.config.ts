import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const aktuellt = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/aktuellt",
  }),
  schema: ({ image }) =>
    z.object({
        title: z.string(),
        date: z.date(),
        image: image(),
    }),
});

export const collections = {
  aktuellt,
};