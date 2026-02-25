import { blogSource } from "@/lib/source";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/mdx-components";
import { createRelativeLink } from "fumadocs-ui/mdx";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { PostActions } from "@/components/PostActions";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const page = blogSource.getPage([slug]);

  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 pt-5 py-20">
      <div className="mb-8">
        <InlineTOC items={page.data.toc}>
          Table of Contents
        </InlineTOC>
      </div>

      <h1 className="text-4xl font-bold mb-6">
        {page.data.title}
      </h1>

      <p className="text-lg text-muted-foreground mb-6">
        {page.data.description}
      </p>

      <PostActions />

      <div className="prose dark:prose-invert max-w-none">
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(blogSource, page),
          })}
        />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return blogSource.getPages().map((page) => ({
    slug: page.slugs[0]!,
  }));
}
