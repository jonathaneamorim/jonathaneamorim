"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const contacts = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/jonathanamorim/", icon: "IN" },
  { name: "Github", href: "https://github.com/jonathaneamorim", icon: "GH" },
  { name: "Whatsapp", href: "http://wa.me/47991291070", icon: "WA" },
  { name: "Email", href: "mailto:jonathanemmanueldeoliveira2003@gmail.com", icon: "@" },
];

export default function Contact() {
  return (
    <section id="contato" className="h-screen snap-start flex flex-col items-center justify-center relative bg-[#050505] px-6 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute text-white text-[20vw] font-black uppercase italic pointer-events-none whitespace-nowrap"
      >
        Contact
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        <SectionTitle title="Vamos" subtitle="Conversar?" />

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.1 } }
          }}
          className="flex flex-wrap justify-center gap-6"
        >
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 100 } }
              }}
              href={c.href}
              target="_blank"
              className="w-36 h-36 md:w-44 md:h-44 bg-[#0A0A0A] border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-[#15E49A] hover:text-black hover:border-[#15E49A] transition-all group"
            >
              <span className="text-4xl font-black opacity-30 group-hover:opacity-100 transition-opacity">{c.icon}</span>
              <span className="uppercase font-bold tracking-widest text-sm md:text-base">{c.name}</span>
            </motion.a>
          ))}
        </motion.div>

        <footer className="mt-20 text-gray-600 text-xs uppercase tracking-[0.4em]">
          © 2026 Jonathan Amorim
        </footer>
      </div>
    </section>
  );
}