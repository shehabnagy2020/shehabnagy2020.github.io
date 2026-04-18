"use client";

import { motion } from "framer-motion";
import { Mail, Phone, SquareMenu, UserRound, MapPin, Send } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "shehab.nagy2020@gmail.com",
    href: "mailto:shehab.nagy2020@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+20 100 830 1465",
    href: "tel:+201008301465",
  },
  {
    icon: SquareMenu,
    label: "GitHub",
    value: "/shehabnagy2020",
    href: "https://github.com/shehabnagy2020",
  },
  {
    icon: UserRound,
    label: "LinkedIn",
    value: "/in/shehabnagy2020",
    href: "https://www.linkedin.com/in/shehabnagy2020/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Cairo, Egypt",
    href: null,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-zinc-950/60">
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
            <span className="bg-gradient-to-r from-indigo-400 via-indigo-500 to-amber-400 bg-clip-text text-transparent">Get In Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-indigo-500 to-amber-500 mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Contact grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="block p-4 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors group"
                  >
                    <item.icon className="w-5 h-5 text-indigo-400 mb-2" />
                    <div className="text-xs text-zinc-500 mb-0.5">{item.label}</div>
                    <div className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors truncate">{item.value}</div>
                  </a>
                ) : (
                  <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800">
                    <item.icon className="w-5 h-5 text-amber-500 mb-2" />
                    <div className="text-xs text-zinc-500 mb-0.5">{item.label}</div>
                    <div className="text-sm font-medium text-zinc-300">{item.value}</div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="p-8 rounded-xl bg-zinc-900 border border-zinc-800">
              <h3 className="text-xl font-bold mb-3">Let&apos;s Work Together</h3>
              <p className="text-zinc-400 text-sm mb-6 max-w-md mx-auto">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
              </p>
              <a
                href="mailto:shehab.nagy2020@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-colors"
              >
                <Send className="w-4 h-4" />
                Send Me a Message
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}