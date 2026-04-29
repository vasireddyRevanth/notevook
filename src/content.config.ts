import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import z from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "blog/**/*.{md,mdx}", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "projects/**/*.{md,mdx}", base: "./src/content" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = { blog, projects };
