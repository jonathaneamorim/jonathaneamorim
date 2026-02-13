"use client";

import SectionTitle from "./ui/SectionTitle";

const contacts = [
  { name: "Linkedin", href: "https://www.linkedin.com/in/jonathanamorim/", icon: "in" },
  { name: "Github", href: "https://github.com/jonathaneamorim", icon: "{}" },
  { name: "Whatsapp", href: "http://wa.me/47991291070", icon: "✦" },
  { name: "Email", href: "mailto:jonathanemmanueldeoliveira2003@gmail.com", icon: "@" },
];

export default function Contact() {
  return (
    <section id="contato" className="flex items-center justify-center relative bg-[#050505]">

      <div className="absolute text-[#0e0e0e] text-[14vw] font-black uppercase italic">
        Contact
      </div>

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">

        <SectionTitle title="Vamos" subtitle="Conversar?" />

        <div className="flex flex-wrap justify-center gap-8">
          {contacts.map((c, i) => (
            <a
              key={i}
              href={c.href}
              target="_blank"
              className="w-40 h-40 bg-[#0A0A0A] border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-[#15E49A] hover:text-black hover:scale-110 transition-all"
            >
              <span className="text-3xl font-black opacity-40">{c.icon}</span>
              <span className="uppercase font-bold tracking-widest">{c.name}</span>
            </a>
          ))}
        </div>

        <footer className="mt-16 text-gray-600 text-xs uppercase tracking-[0.3em]">
          © 2026 Jonathan Amorim
        </footer>
      </div>

    </section>
  );
}
