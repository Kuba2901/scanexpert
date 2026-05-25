import { z, defineCollection } from 'astro:content';
// W Astro 5 musimy zaimportować loader
import { glob } from 'astro/loaders'; 

const realizacjeCollection = defineCollection({
  // Wskazujemy Astro, gdzie leżą pliki Markdown
  loader: glob({ pattern: "**/*.md", base: "./src/content/realizacje" }),
  
  schema: ({ image }) => z.object({
    id: z.string(),
    title: z.string(),
    address: z.string(),
    city: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    coverImage: image(), 
    alt: z.string().default('Zdjęcie projektu'),
  }),
});

export const collections = {
  'realizacje': realizacjeCollection,
};