// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const analysisCollection = defineCollection({
  type: 'content', // Must be 'content' for MDX/Markdown
  schema: z.object({
    title: z.string(),
    hook: z.string(), // The single gut-punch line for the preview
    pubDate: z.date(),
    isGated: z.boolean().default(false),
    author: z.string().default('Joey Mulder'), // Or whatever name you are using
  }),
});

export const collections = {
  'analysis': analysisCollection,
};