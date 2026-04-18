"use client";

import { motion } from "framer-motion";
import { Server, Database, Code, Cloud, Terminal, Globe } from "lucide-react";

const skillCategories = [
  {
    name: "Backend",
    icon: Server,
    gradient: "from-indigo-500 to-indigo-700",
    skills: ["Node.js", "NestJS", "Express", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    name: "Databases",
    icon: Database,
    gradient: "from-indigo-600 to-indigo-800",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "TypeORM"],
  },
  {
    name: "Frontend",
    icon: Code,
    gradient: "from-indigo-400 to-amber-500",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Framer Motion"],
  },
  {
    name: "Cloud & DevOps",
    icon: Cloud,
    gradient: "from-amber-500 to-indigo-600",
    skills: ["Docker", "AWS", "CI/CD", "PM2", "Nginx", "Linux"],
  },
  {
    name: "Tools",
    icon: Terminal,
    gradient: "from-indigo-600 to-indigo-400",
    skills: ["Git", "GitHub", "VS Code", "Postman", "npm/yarn", "Webpack"],
  },
  {
    name: "Languages",
    icon: Globe,
    gradient: "from-amber-500 to-amber-400",
    skills: ["JavaScript", "Python"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-zinc-950/60">
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
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-amber-400 bg-clip-text text-transparent">Skills & Technologies</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-amber-500 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              {/* Icon + Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center flex-shrink-0`}>
                  <category.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold">{category.name}</h3>
              </div>

              {/* Skill tags */}
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs bg-zinc-800 text-zinc-300 border border-zinc-700/50"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}