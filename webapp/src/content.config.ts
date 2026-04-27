// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const realizacje = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/realizacje" }),
  schema: ({ image }) => z.object({ // Dodajemy dostęp do funkcji image
    title: z.string(),
    location: z.string(),
    tags: z.array(z.string()),
    accentTags: z.array(z.string()).optional(),
    order: z.number().default(99),
    coverImage: image().optional(), // Nowe pole na zdjęcie okładkowe
    imageAlt: z.string().default("Zdjęcie realizacji"),
  }),
});

export const collections = { realizacje };