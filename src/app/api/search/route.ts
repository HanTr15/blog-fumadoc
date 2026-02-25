import { docsSource, blogSource } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

const docsSearch = createFromSource(docsSource, {
  language: 'english',
});

const blogSearch = createFromSource(blogSource, {
  language: 'english',
});

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('query') ?? '';

  const [docsRes, blogRes] = await Promise.all([
    docsSearch.GET(req),
    blogSearch.GET(req),
  ]);

  const docsData = await docsRes.json();
  const blogData = await blogRes.json();

  return Response.json([
    ...docsData,
    ...blogData,
  ]);
}
