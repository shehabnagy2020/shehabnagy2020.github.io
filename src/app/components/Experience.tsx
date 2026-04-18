"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Deloitte Innovation Hub",
    url: "https://www.deloitte.com/uk/en/about/story/impact/the-deloitte-innovation-hub.html",
    period: "Jan 2026 - Present",
    location: "Cairo, Egypt",
    description: "Part of Deloitte's offshore delivery center in Cairo, building and maintaining enterprise frontend applications for international clients. Collaborating with cross-functional teams across time zones to deliver high-impact digital solutions at scale.",
    technologies: ["Frontend Development", "Enterprise Solutions", "Digital Transformation"],
  },
  {
    title: "Senior Frontend Developer",
    company: "CrossWorkers (UNIwise - WISEflow)",
    url: "https://www.crossworkers-egypt.com/",
    period: "Aug 2023 - Jan 2026",
    location: "Cairo, Egypt",
    description: "Working on WISEflow, a comprehensive platform that supports and handles the full workflow of assessments across a wide range of formative and summative assessment types.",
    technologies: ["Frontend Development", "Assessment Platform", "EdTech"],
  },
  {
    title: "Senior Frontend Developer",
    company: "CoatConnect",
    url: "https://www.coatconnect.com",
    period: "Apr 2023 - Aug 2023",
    location: "Cairo, Egypt",
    description: "Online Hub for Booking Specialized Medical Courses, Conferences, Trainings and Other Healthcare Professional Events.",
    technologies: ["Frontend Development", "Healthcare", "Booking System"],
  },
  {
    title: "Senior Frontend Developer",
    company: "Montu",
    url: "https://www.montuapps.com/",
    period: "Sep 2021 - May 2023",
    location: "Cairo, Egypt",
    description: "Montu is a no-code mobile app builder for Shopify merchants. Helping clients build native mobile apps instantly, without the need for expensive dev teams.",
    technologies: ["Frontend Development", "Mobile Apps", "Shopify", "No-Code"],
  },
  {
    title: "Frontend Developer",
    company: "Freelancer",
    period: "Oct 2019 - Jul 2021",
    location: "Cairo, Egypt",
    description: "Built multiple projects including Cammani (e-commerce) and Zado (recipe-sharing platform with social features).",
    technologies: ["React", "Next.js", "Node.js", "MongoDB", "E-commerce"],
  },
  {
    title: "Full Stack Developer",
    company: "The League",
    period: "May 2018 - Apr 2019",
    location: "Cairo, Egypt",
    description: "Developed Tournamentor (tournament platform with payment integration) and SteroidPC (e-commerce for PC parts with custom PC builder).",
    technologies: ["React", "Full Stack", "Payment Integration", "E-commerce"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 bg-zinc-950/60">
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
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-amber-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-amber-500 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-amber-500/50 to-indigo-500/50" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-10 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-1 w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-zinc-950 z-10" />

              {/* Card */}
              <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] p-5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              }`}>
                {/* Company */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/20 flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-4 h-4 text-indigo-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm truncate">
                      {exp.url ? (
                        <a href={exp.url} target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                          {exp.company}
                        </a>
                      ) : (
                        exp.company
                      )}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-zinc-500">
                      <Calendar className="w-3 h-3" />
                      <span>{exp.period}</span>
                      <MapPin className="w-3 h-3 ml-1" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                {/* Role */}
                <p className="text-indigo-400 font-medium text-sm mb-2">{exp.title}</p>

                {/* Description */}
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">{exp.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-0.5 rounded text-xs bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}