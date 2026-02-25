import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import { metaSchema, pageSchema as basePageSchema } from 'fumadocs-core/source/schema';
import { z } from 'zod';

const blogSchema = basePageSchema.extend({
  date: z.string().optional(),
   image: z.string().optional(),
});

export const docs = defineDocs({
  dir: 'content/docs',
  docs: {
    schema: basePageSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export const blog = defineDocs({
  dir: 'content/blog',
  docs: {
    schema: blogSchema,
    postprocess: {
      includeProcessedMarkdown: true,
    },
  },
  meta: {
    schema: metaSchema,
  },
});

export default defineConfig({});
