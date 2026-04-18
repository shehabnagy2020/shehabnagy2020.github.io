"use client";

import { motion } from "framer-motion";
import { SquareMenu, ExternalLink, MessageSquare, Brain, Sparkles } from "lucide-react";

const projects = [
  {
    name: "Whisper",
    tagline: "The Stealth AI Mirror",
    description: "A private, full-stack AI chat client that proxies Ollama through a NestJS backend, ensuring zero frontend-to-AI direct traffic. Features auth, chat sessions, markdown rendering, vision support, and voice input.",
    icon: Brain,
    gradient: "from-indigo-500 to-indigo-700",
    technologies: ["React 19", "Mantine UI", "NestJS", "TypeORM", "SQLite", "Ollama"],
    highlights: ["Stealth proxy", "Vision & voice", "Model manager", "Streaming"],
    repoUrl: "https://github.com/shehabnagy2020/whisper",
    videoUrl: "https://shehabnagy2020.github.io/whisper/",
  },
  {
    name: "Chatty",
    tagline: "Real-time Chat Application",
    description: "Feature-rich real-time chat application with user authentication, voice calls, file sharing, reactions, and markdown support. Built with WebRTC and Socket.IO.",
    icon: MessageSquare,
    gradient: "from-indigo-400 to-amber-500",
    technologies: ["React 19", "Vite", "Mantine UI", "NestJS", "Socket.IO", "WebRTC"],
    highlights: ["Voice calls", "Real-time messaging", "File sharing", "Reactions"],
    repoUrl: "https://github.com/shehabnagy2020/chatty",
    videoUrl: "https://shehabnagy2020.github.io/chatty/",
  },
  {
    name: "Pokemon Explorer",
    tagline: "Beautiful Pokemon Browser",
    description: "A sleek Pokemon browser/explorer with search, filter, detailed stats, and evolution chains. Features a stunning dark glassmorphic UI with animated stat bars.",
    icon: Sparkles,
    gradient: "from-amber-500 to-indigo-600",
    technologies: ["React 19", "TypeScript", "Vite", "React Router", "PokeAPI"],
    highlights: ["Glassmorphic UI", "Evolution chains", "Dual pagination", "Stat bars"],
    repoUrl: "https://github.com/shehabnagy2020/pokemon",
    videoUrl: "https://shehabnagy2020.github.io/pokemon/",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-zinc-950/60">
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
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-amber-400 bg-clip-text text-transparent">Side Projects</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-amber-500 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors overflow-hidden flex flex-col"
            >
              {/* Gradient top bar */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

              <div className="p-5 flex flex-col flex-1">
                {/* Header */}
                <div className="flex items-start gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0`}>
                    <project.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-lg leading-tight">{project.name}</h3>
                    <p className="text-amber-400 text-xs">{project.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.highlights.map((h) => (
                    <span key={h} className="px-2 py-0.5 rounded text-xs bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      {h}
                    </span>
                  ))}
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-2 pt-4 border-t border-zinc-800">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                  >
                    <SquareMenu className="w-3.5 h-3.5" />
                    Code
                  </a>
                  <a
                    href={project.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-medium text-zinc-400 hover:text-white bg-zinc-800/50 hover:bg-zinc-800 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}