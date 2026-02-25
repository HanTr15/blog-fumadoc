"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Newspaper, User } from "lucide-react";

const items = [
  { title: "Home", url: "/", icon: Home },
  { title: "Writeup", url: "/docs", icon: Newspaper },
  { title: "Blog", url: "/blog", icon: Newspaper },
  { title: "About", url: "/#about", icon: User },
];

export default function SidebarTabs() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="p-3">

      {/* TOGGLE BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2 rounded-lg
                   hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
      >
        <span className="font-medium text-sm">Navigation</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* COLLAPSIBLE CONTENT */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 mt-3" : "max-h-0"
        }`}
      >
        <div className="space-y-2">
          {items.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.url;

            return (
              <Link
                key={item.url}
                href={item.url}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition
                  ${
                    active
                      ? "bg-yellow-100 dark:bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                      : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  }
                `}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{item.title}</span>
              </Link>
            );
          })}
        </div>
      </div>

    </div>
  );
}
