"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Youtube,
  Instagram,
} from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { docsSource, blogSource } from "@/lib/source"; // pastikan blogSource ada
const socials = [
  { icon: Github, url: "https://github.com/HanTr15" },
  { icon: Linkedin, url: "https://linkedin.com/in/hamdantr" },
  { icon: Youtube, url: "https://youtube.com/@Ryosta" },
  { icon: Instagram, url: "https://instagram.com/hamdanntr" },
];

export default function HomePage() {

  // Ambil dari docs
  const docsPosts = docsSource.getPages();
  const blogPosts = blogSource?.getPages?.() ?? [];

  const posts = [
    ...blogPosts, // blog punya date
    ...docsPosts.map((p) => ({
      ...p,
      data: {
        ...p.data,
        date: null, // biar aman
      },
    })),
  ]
    .sort((a, b) => {
      const dateA = new Date(a.data.date ?? 0).getTime();
      const dateB = new Date(b.data.date ?? 0).getTime();
      return dateB - dateA;
    })
    .slice(0, 4);

  return (
    <main className="
      min-h-screen transition-colors duration-500
      bg-gradient-to-b
      from-white via-yellow-50/40 to-white
      dark:from-black dark:via-zinc-950 dark:to-black
      text-zinc-900 dark:text-white
    ">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-28 pb-20 text-center">

        <span className="
          px-4 py-1 text-sm rounded-full border
          border-yellow-400/40
          bg-yellow-100 dark:bg-yellow-500/10
          text-yellow-700 dark:text-yellow-400
        ">
          personal blog
        </span>

        <h1 className="mt-8 text-4xl md:text-6xl font-bold leading-tight">
          Hello All 👋
          <br />
          <span className="text-yellow-600 dark:text-yellow-400">
            <TypeAnimation
              sequence={[
                "My Name is Hamdan Trisnawan",
                2000,
                "Also Known As ryosta",
                2000,
                "Welcome To My personal blog",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h1>

        <p className="mt-6 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          I share content about cybersecurity, CTF writeups, networking, and my ongoing learning journey in the field.
        </p>

        {/* SOCIALS */}
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          {socials.map((item, i) => {
            const Icon = item.icon;
            return (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  p-3 rounded-full
                  border border-zinc-300 dark:border-zinc-800
                  bg-white dark:bg-zinc-900
                  hover:border-yellow-400
                  hover:text-yellow-500
                  hover:shadow-[0_0_20px_rgba(234,179,8,0.4)]
                  transition duration-300
                "
              >
                <Icon size={20} />
              </a>
            );
          })}
        </div>

      </section>

      {/* ABOUT */}
      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="grid md:grid-cols-2 gap-14 items-center">

          <div>
            <span className="
              inline-block px-4 py-1 text-sm rounded-full border
              border-yellow-400/40
              bg-yellow-100 dark:bg-yellow-500/10
              text-yellow-700 dark:text-yellow-400
              mb-6
            ">
              About Me
            </span>

            <p className="text-lg leading-relaxed">
              I'm Hamdan Trisnawan, also known as ryosta. A student deeply interested in
              Networking and Cyber Security. I enjoy analyzing infrastructures,
              understanding how systems communicate, and exploring security weaknesses
              to make them stronger and more resilient.
            </p>

            <p className="mt-6 text-zinc-600 dark:text-zinc-400">
              Actively learning about network engineering, system security,
              penetration testing, and Capture The Flag challenges to sharpen
              my analytical and defensive mindset. I also explore software
              development as a complementary skill to support my security journey.
            </p>

          </div>
        </div>
      </section>

      {/* LATEST POSTS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">

        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-semibold">
            Latest Posts
          </h2>

          <Link
            href="/blog"
            className="text-yellow-600 dark:text-yellow-400 hover:underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="
                p-6 rounded-2xl
                border border-zinc-200 dark:border-zinc-800
                bg-white dark:bg-zinc-900
                hover:border-yellow-400
                hover:shadow-[0_0_25px_rgba(234,179,8,0.15)]
                transition
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

      {/* FOOTER */}
      <footer className="
        border-t border-zinc-200 dark:border-zinc-800
        py-8 text-center text-sm
        text-zinc-600 dark:text-zinc-400
      ">
        © {new Date().getFullYear()} Hamdan Trisnawan.
      </footer>

    </main>
  );
}
