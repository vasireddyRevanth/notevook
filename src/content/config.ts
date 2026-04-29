import { defineCollection } from "astro:content";
import z from "astro/zod";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    url: z.string().url().optional(),
  }),
});

export const collections = { blog, projects };
