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
    })
});

const thoughts = defineCollection({
    loader: glob({ pattern: '*.md', base: "./src/thoughts" }),
    schema: z.object({
      pubDate: z.date(),
      tags: z.array(z.string()).optional(),
    })
});


export const collections = { blog, thoughts};