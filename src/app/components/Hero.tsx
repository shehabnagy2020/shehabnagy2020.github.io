"use client";

import { motion } from "framer-motion";
import { ChevronDown, Mail, Download, MapPin, SquareMenu, UserRound } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Avatar */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-32 h-32 mb-8 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center ring-2 ring-indigo-500/20 ring-offset-4 ring-offset-zinc-950"
          >
            <span className="text-5xl font-bold text-white">SN</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold mb-4 tracking-tight"
          >
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-amber-400 bg-clip-text text-transparent">
              Shehab Nagy
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl md:text-2xl text-zinc-400 mb-3"
          >
            Software Engineer
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex items-center gap-2 text-zinc-500 mb-6"
          >
            <MapPin className="w-4 h-4 text-amber-500" />
            <span>Cairo, Egypt</span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-zinc-400 max-w-xl mb-10 leading-relaxed"
          >
            Building scalable systems and optimizing performance with elegant code
          </motion.p>

          {/* Social links */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex items-center gap-3 mb-10"
          >
            <a
              href="https://github.com/shehabnagy2020"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <SquareMenu className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/shehabnagy2020/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <UserRound className="w-5 h-5" />
            </a>
            <a
              href="mailto:shehab.nagy2020@gmail.com"
              className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex gap-3 flex-wrap justify-center"
          >
            <a
              href="#experience"
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-zinc-700 hover:border-zinc-600 text-zinc-300 hover:text-white font-medium text-sm transition-colors"
            >
              Contact Me
            </a>
            <a
              href="https://drive.google.com/file/d/1JFXo0yPQQKwgBSVTnvp6fNcLLfaljkho/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-300 hover:text-white font-medium text-sm transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-zinc-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}