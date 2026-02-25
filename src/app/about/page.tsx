"use client";

export default function AboutPage() {
  return (
    <main className="
      min-h-screen transition-colors duration-500
      bg-gradient-to-br
      from-yellow-100 via-yellow-50 to-white
      dark:from-[#0f0f0f] dark:via-[#111] dark:to-black
      text-black dark:text-white
    ">

      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="
          rounded-3xl p-10 md:p-16
          bg-gradient-to-br
          from-yellow-200/70 via-yellow-100/40 to-white/40
          dark:from-yellow-500/10 dark:via-yellow-400/5 dark:to-transparent
          backdrop-blur-xl
          border border-yellow-300/50 dark:border-yellow-500/20
        ">

          <div className="flex flex-col md:flex-row items-center gap-16">

            {/* TEXT */}
            <div className="space-y-6">

              <span className="px-4 py-1 text-sm bg-yellow-100 dark:bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 rounded-full border border-yellow-300/50 dark:border-yellow-500/30">
                About Me
              </span>

              <h1 className="text-4xl font-bold">
                Hamdan Trisnawan
              </h1>

              <p className="text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                Saya adalah pelajar SMKN 1 PUNGGING yang memiliki ketertarikan
                besar di dunia Programming dan Cyber Security.
              </p>

              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                Fokus saya saat ini adalah memperdalam:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-400">
                <li>Web Security & Penetration Testing</li>
                <li>Malware Analysis</li>
                <li>Reverse Engineering</li>
                <li>Fullstack Development</li>
              </ul>

            </div>

            {/* PHOTO */}
            <div>
              <img
                src="/me.jpeg"
                alt="Hamdan"
                className="w-72 md:w-96 rounded-3xl shadow-2xl object-cover"
              />
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
