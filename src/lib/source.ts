import { docs, blog } from 'fumadocs-mdx:collections/server';
import { type InferPageType, loader } from 'fumadocs-core/source';
import { lucideIconsPlugin } from 'fumadocs-core/source/lucide-icons';

/* ================= DOCS ================= */

export const docsSource = loader({
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  plugins: [lucideIconsPlugin()],
});

/* ================= BLOG ================= */

export const blogSource = loader({
  baseUrl: '/blog',
  source: blog.toFumadocsSource(),
});

/* ================= DOCS HELPERS ================= */

export function getPageImage(page: InferPageType<typeof docsSource>) {
  const segments = [...page.slugs, 'image.png'];

  return {
    segments,
    url: `/og/docs/${segments.join('/')}`,
  };
}


export async function getLLMText(page: InferPageType<typeof docsSource>) {
  const processed = await page.data.getText('processed');

  return `# ${page.data.title}

${processed}`;
}
export const searchSource = {
  getPages: () => [
    ...docsSource.getPages(),
    ...blogSource.getPages(),
  ],
};

