"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Share2, Check } from "lucide-react";

export function PostActions() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;

    if (navigator.share) {
      await navigator.share({
        title: document.title,
        url,
      });
      return;
    }

    await navigator.clipboard.writeText(url);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="flex items-center gap-3 mb-8">
      <Link
        href="/"
        className="inline-flex text-white items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-sm"
      >
        <ArrowLeft size={16}/>
        Home
      </Link>

      <button
        onClick={handleShare}
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
          copied
            ? "bg-green-500 text-white"
            : "bg-yellow-400 text-black hover:opacity-90"
        }`}
      >
        {copied ? <Check size={16} /> : <Share2 size={16} />}
        {copied ? "Copied!" : "Share Post"}
      </button>
    </div>
  );
}
