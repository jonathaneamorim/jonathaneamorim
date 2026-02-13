"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const iframeProjects = [
  { title: "Open Helper", url: "https://open-helper.vercel.app/", github: "https://github.com/jonathaneamorim/web-it-open-helper" },
  { title: "BioLink", url: "https://bio-link-green-two.vercel.app/", github: "https://github.com/jonathaneamorim/BioLink" },
  { title: "Shop List", url: "https://web-shop-list.vercel.app/", github: "https://github.com/jonathaneamorim/web-shop-list" },
  { title: "Notepad", url: "https://web-notepad-ten.vercel.app/", github: "https://github.com/jonathaneamorim/web-notepad" },
];

const repoProjects = [
  { title: "Fictional University", github: "https://github.com/jonathaneamorim/Fictional-University", tech: "PHP / WordPress" },
  { title: "Web DevQuiz", github: "https://github.com/jonathaneamorim/web-devquiz", tech: "JavaScript" },
  { title: "Nexus PHP MVC", github: "https://github.com/jonathaneamorim/Nexus-PHP-MVC", tech: "PHP" },
  { title: "TheHouse C#", github: "https://github.com/jonathaneamorim/TheHouse-C-Sharp", tech: "C# / .NET" },
  { title: "TheHouse Java", github: "https://github.com/jonathaneamorim/TheHouse-Java", tech: "Java / Spring" },
];

export default function Projects() {
  return (
    <section id="projetos" className="bg-[#050505] px-6 py-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        
        <SectionTitle title="Selected" subtitle="Works" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* PROJETOS COM IFRAME */}
          {iframeProjects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-xl bg-[#0A0A0A] border border-white/10 overflow-hidden"
            >
              <iframe
                src={p.url}
                className="w-full h-[220px] grayscale opacity-50 group-hover:opacity-100 group-hover:grayscale-0 transition-all pointer-events-none"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold uppercase italic">{p.title}</h3>

                <div className="flex gap-3 mt-4">
                  <a href={p.github} target="_blank"
                     className="w-full text-center border border-white/20 py-2 uppercase text-sm hover:border-[#15E49A] hover:text-[#15E49A]">
                    Code
                  </a>
                  <a href={p.url} target="_blank"
                     className="w-full text-center bg-white text-black py-2 uppercase text-sm hover:bg-[#15E49A]">
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}

          {/* REPOSITÓRIOS */}
          {repoProjects.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="rounded-xl p-6 bg-[#0A0A0A] border border-[#15E49A]/20 hover:border-[#15E49A] transition-all"
            >
              <span className="text-[#15E49A] text-xs font-bold">{p.tech}</span>

              <h3 className="text-3xl font-bold italic mt-3">{p.title}</h3>

              <p className="text-gray-500 mt-2 text-sm">Backend & Arquitetura</p>

              <a href={p.github} target="_blank"
                 className="mt-6 inline-block text-[#15E49A] font-bold uppercase text-sm hover:underline">
                Ver Repositório →
              </a>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
