import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const apps = defineCollection({ loader: glob({ pattern: '**/index.md', base: './src/content/apps' }), schema: ({ image }) => z.object({ title: z.string(), description: z.string(), origin: z.enum(['self','recommended']), tags: z.array(z.string()), icon: image().optional(), download: z.string().url().optional(), website: z.string().url().optional(), repository: z.string().url().optional() }) });
export const collections = { apps };
