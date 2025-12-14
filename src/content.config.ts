import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";
const blog = defineCollection({
    loader: glob({ pattern: '*.mdx', base: "./src/posts" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }).optional(),
      tags: z.array(z.string()),
      password: z.boolean().optional(),
    })
});

export const collections = { blog };