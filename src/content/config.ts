import { defineCollection, z } from 'astro:content';

const appsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.string(),
    icon: z.string().default('Sparkles'),
    status: z.enum(['Being built', 'Being Built', 'Coming soon', 'Coming Soon', 'In Development', 'In the Lab', 'Currently developing', 'Planned']).default('Coming soon'),
    features: z.array(z.string()),
    platforms: z.array(z.string()).default(['Android']),
    featured: z.boolean().default(true),
    badge: z.string().optional(),
  }),
});

const categoriesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    icon: z.string(),
    accentColor: z.string().default('purple'),
    featured: z.boolean().default(true),
    exampleApps: z.array(z.string()),
  }),
});

const bundlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    category: z.string(),
    appsIncluded: z.array(z.string()),
    featured: z.boolean().default(true),
    status: z.string().default('Future Collection Concept'),
  }),
});

const labsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    icon: z.string(),
    techTag: z.string(),
    status: z.string().default('Active Exploration'),
  }),
});

export const collections = {
  apps: appsCollection,
  categories: categoriesCollection,
  bundles: bundlesCollection,
  labs: labsCollection,
};
