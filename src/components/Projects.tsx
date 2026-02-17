"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const iframeProjects = [
  { title: "Open Helper", url: "https://open-helper.vercel.app/", github: "https://github.com/jonathaneamorim/web-it-open-helper" },
  { title: "BioLink", url: "https://bio-link-green-two.vercel.app/", github: "https://github.com/jonathaneamorim/BioLink" },
  { title: "Shop List", url: "https://web-shop-list.vercel.app/", github: "https://github.com/jonathaneamorim/web-shop-list" },
  { title: "Notepad", url: "https://web-notepad-ten.vercel.app/", github: "https://github.com/jonathaneamorim/web-notepad" },
  { title: "Organiza", url: "https://organiza-seven.vercel.app/", github: "https://github.com/jonathaneamorim/organiza" }
];

const repoProjects = [
  { title: "Fictional University", github: "https://github.com/jonathaneamorim/Fictional-University", tech: "PHP / WordPress" },
  { title: "Web DevQuiz", github: "https://github.com/jonathaneamorim/web-devquiz", tech: "JavaScript" },
  { title: "Nexus PHP MVC", github: "https://github.com/jonathaneamorim/Nexus-PHP-MVC", tech: "PHP" },
  { title: "TheHouse C#", github: "https://github.com/jonathaneamorim/TheHouse-C-Sharp", tech: "C# / .NET" },
  { title: "TheHouse Java", github: "https://github.com/jonathaneamorim/TheHouse-Java", tech: "Java / Spring" },
];

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projetos" className="min-h-screen snap-start bg-[#050505] px-6 pt-28 pb-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        
        <SectionTitle title="Selected" subtitle="Works" />

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {iframeProjects.map((p, i) => (
            <motion.div variants={item} key={i} whileHover={{ y: -6 }} className="rounded-xl bg-[#0A0A0A] border border-white/10 overflow-hidden flex flex-col h-[420px] group">
              <div className="h-[55%] relative overflow-hidden bg-[#111]">
                <iframe src={p.url} className="w-[150%] h-[150%] origin-top-left scale-[0.67] grayscale opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all pointer-events-none border-none" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all" />
              </div>

              <div className="p-6 flex flex-col flex-1 justify-between">
                <h3 className="text-2xl font-bold uppercase italic">{p.title}</h3>
                <div className="flex gap-3 mt-4">
                  <a href={p.github} target="_blank" className="flex-1 text-center border border-white/20 py-2 uppercase text-sm font-bold hover:border-[#15E49A] hover:text-[#15E49A] transition-all">Code</a>
                  <a href={p.url} target="_blank" className="flex-1 text-center bg-white text-black py-2 uppercase text-sm font-bold hover:bg-[#15E49A] transition-all">Demo</a>
                </div>
              </div>
            </motion.div>
          ))}

          {repoProjects.map((p, i) => (
            <motion.div variants={item} key={`repo-${i}`} whileHover={{ y: -6 }} className="rounded-xl p-8 bg-[#0A0A0A] border border-[#15E49A]/20 hover:border-[#15E49A] transition-all flex flex-col justify-between h-[420px]">
              <div>
                <span className="text-[#15E49A] text-xs font-bold bg-[#15E49A]/10 px-3 py-1 rounded uppercase tracking-wider">{p.tech}</span>
                <h3 className="text-3xl font-bold italic mt-4">{p.title}</h3>
                <p className="text-gray-500 mt-2 text-sm uppercase tracking-widest">Backend & Arquitetura</p>
              </div>
              <a href={p.github} target="_blank" className="mt-6 inline-block text-[#15E49A] font-bold uppercase text-sm hover:underline underline-offset-4 decoration-2">
                Ver Repositório →
              </a>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}