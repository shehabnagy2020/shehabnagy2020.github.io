"use client";

import { SquareMenu, UserRound, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 border-t border-zinc-800/50 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-zinc-500">
            &copy; {currentYear} Shehab Nagy. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://github.com/shehabnagy2020"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <SquareMenu className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/shehabnagy2020/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <UserRound className="w-4 h-4" />
            </a>
            <a
              href="mailto:shehab.nagy2020@gmail.com"
              className="w-8 h-8 rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <p className="text-sm text-zinc-500">
            Built with <span className="text-indigo-400">Next.js</span> & <span className="text-amber-400">Framer Motion</span>
          </p>
        </div>
      </div>
    </footer>
  );
}