"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const timeline = [
  { year: "2020", text: "Início no IFC — lógica de programação, SQL e desenvolvimento base." },
  { year: "2022", text: "Conclusão do técnico + diversos cursos focados em Desenvolvimento Web." },
  { year: "2024", text: "Curso Entra21 — Java. Primeiro emprego como QA Tester. Início de ADS." },
  { year: "2025", text: "Estágio como desenvolvedor na Monks — Scrum, Kanban e frameworks modernos." },
];

export default function Timeline() {
  return (
    <section id="trajetoria" className="min-h-screen snap-start px-6 pt-28 pb-20 flex flex-col justify-center bg-black">
      <div className="max-w-7xl mx-auto w-full">
        
        <SectionTitle title="Minha" subtitle="Jornada" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="hidden lg:block absolute top-10 left-0 w-full h-[2px] bg-[#15E49A]/20 -z-10"></div>

          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#0A0A0A] border border-white/10 hover:border-[#15E49A] p-6 rounded-lg group transition-all"
            >
              <div className="w-5 h-5 bg-[#15E49A] rounded-full mb-6 group-hover:shadow-[0_0_15px_#15E49A] transition-all"></div>
              <h3 className="text-4xl font-black italic text-white mb-3">{t.year}</h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium">{t.text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}