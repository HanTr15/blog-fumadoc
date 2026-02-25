import Link from "next/link";
import { blogSource } from "@/lib/source";

export default async function BlogPage() {
  const posts = blogSource.getPages();

  return (
    <main className="
      min-h-screen
      bg-gradient-to-b
      from-white via-yellow-50/40 to-white
      dark:from-black dark:via-zinc-950 dark:to-black
      text-zinc-900 dark:text-white
    ">

      <section className="max-w-6xl mx-auto px-6 pt-28 pb-24">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl font-semibold tracking-wide">
            | Blog |
          </h1>

          <p className="text-muted-foreground mt-4">
            Blog seputar networking, cybersecurity & software developing.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {posts.map((post) => (
            <Link
              key={post.url}
              href={`/blog/${post.slugs.join("/")}`}
              className="
                p-6 rounded-2xl
                border border-zinc-200 dark:border-zinc-800
                bg-white dark:bg-zinc-900
                hover:border-yellow-400
                hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]
                hover:-translate-y-1
                transition duration-300
              "
            >
              <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                {post.data.title}
              </h3>

              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3">
                {post.data.description}
              </p>

              {post.data.date && (
                <p className="text-xs mt-4 text-yellow-600 dark:text-yellow-400">
                  {post.data.date}
                </p>
              )}
            </Link>
          ))}

        </div>

      </section>

    </main>
  );
}