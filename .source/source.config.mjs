// source.config.ts
import { defineConfig, defineDocs } from "fumadocs-mdx/config";
import { metaSchema, pageSchema as basePageSchema } from "fumadocs-core/source/schema";
import { z } from "zod";
var blogSchema = basePageSchema.extend({
  date: z.string().optional(),
  image: z.string().optional()
});
var docs = defineDocs({
  dir: "content/docs",
  docs: {
    schema: basePageSchema,
    postprocess: {
      includeProcessedMarkdown: true
    }
  },
  meta: {
    schema: metaSchema
  }
});
var blog = defineDocs({
  dir: "content/blog",
  docs: {
    schema: blogSchema,
    postprocess: {
      includeProcessedMarkdown: true
    }
  },
  meta: {
    schema: metaSchema
  }
});
var source_config_default = defineConfig({});
export {
  blog,
  source_config_default as default,
  docs
};
