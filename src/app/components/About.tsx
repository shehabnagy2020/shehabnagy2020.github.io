"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-zinc-950/60">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-amber-400 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-amber-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left - Summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <p className="text-zinc-400 leading-relaxed">
                I&apos;m a passionate <span className="text-indigo-400 font-medium">Software Engineer</span> with experience in building
                scalable systems and optimizing performance. I specialize in backend development,
                creating robust APIs, and designing efficient architectures that handle real-world demands.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <p className="text-zinc-400 leading-relaxed">
                My expertise spans across modern web technologies, from React frontends to
                NestJS backends, with a focus on delivering clean, maintainable code that stands
                the test of time.
              </p>
            </div>
          </motion.div>

          {/* Right - Info cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5"
          >
            {/* Education */}
            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Bachelor&apos;s in Computer Science</h3>
                  <p className="text-sm text-zinc-500">2016 - 2020</p>
                </div>
              </div>
            </div>

            {/* Focus */}
            <div className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-amber-500 to-indigo-500 flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Full Stack Development</h3>
                  <p className="text-sm text-zinc-500">React, NestJS, TypeScript, Node.js</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "5+", label: "Years Exp" },
                { value: "10+", label: "Technologies" },
                { value: "8+", label: "Years Coding" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, type: "spring" }}
                  className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-center"
                >
                  <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-amber-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-zinc-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}