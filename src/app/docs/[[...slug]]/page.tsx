import { getPageImage, docsSource } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/layouts/docs/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { PostActions } from "@/components/PostActions";

export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = docsSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage
      toc={page.data.toc}
      full={false}
      className="max-w-4xl mx-auto"
    >
      <div className="space-y-4 border-b pb-8">
        <DocsTitle className="text-3xl font-bold tracking-tight">
          {page.data.title}
        </DocsTitle>
        {page.data.description && (
          <DocsDescription className="text-muted-foreground text-base">
            {page.data.description}
          </DocsDescription>
        )}
        <PostActions />
      </div>
      <DocsBody className="prose prose-neutral dark:prose-invert max-w-none pt-8">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(docsSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return docsSource.generateParams();
}
