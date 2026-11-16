import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const text = z.string().trim().min(1);
const bilingual = z.object({ ru: text, en: text });
const externalUrl = z.url({ protocol: /^https?$/ });

const profiles = defineCollection({
  loader: glob({ base: './src/content/profiles', pattern: '*.md' }),
  schema: z.object({ description: text, copy: z.record(z.string(), text) }),
});

const publications = defineCollection({
  loader: glob({ base: './src/content/publications', pattern: '*.md' }),
  schema: z.object({ date: z.iso.date(), url: externalUrl, publisher: bilingual, title: bilingual }),
});

const talks = defineCollection({
  loader: glob({ base: './src/content/talks', pattern: '*.md' }),
  schema: z.object({
    order: z.int().positive(),
    title: bilingual,
    links: z.array(z.object({ url: externalUrl, label: bilingual })).nonempty(),
  }),
});

const site = defineCollection({
  loader: glob({ base: './src/content/site', pattern: '*.md' }),
  schema: z.object({ updated: z.iso.date(), links: z.record(z.string(), z.url({ protocol: /^(https?|mailto)$/ })) }),
});

export const collections = { profiles, publications, talks, site };
