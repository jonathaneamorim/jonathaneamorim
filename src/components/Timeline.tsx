"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";

const timeline = [
  {
    year: "2020",
    text: "Início no IFC — lógica de programação, SQL e desenvolvimento base.",
  },
  {
    year: "2022",
    text: "Conclusão do técnico + diversos cursos focados em Desenvolvimento Web.",
  },
  {
    year: "2024",
    text: "Curso Entra21 — Java. Primeiro emprego como QA Tester. Início do curso de ADS.",
  },
  {
    year: "2025",
    text: "Estágio como desenvolvedor na Monks — Scrum, Kanban, Git e frameworks modernos.",
  },
];

export default function Timeline() {
  return (
    <section className="px-6 flex items-center bg-black">
      <div className="max-w-6xl mx-auto w-full">

        <SectionTitle title="Minha" subtitle="Jornada" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {timeline.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-[#0A0A0A] border border-white/10 hover:border-[#15E49A] p-6 rounded-lg"
            >
              <div className="w-4 h-4 bg-[#15E49A] rounded-full mb-4"></div>
              <h3 className="text-4xl font-bold italic">{t.year}</h3>
              <p className="text-gray-400 mt-3 leading-relaxed">{t.text}</p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
