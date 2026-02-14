"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="min-h-screen snap-start pt-28 pb-12 flex items-center justify-center relative px-6 overflow-hidden bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl w-full gap-12 h-full">  
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left w-full md:w-1/2 flex flex-col items-center md:items-start"
        >
          <div className="relative inline-block mb-6">
            <div className="absolute -inset-2 bg-gradient-to-br from-[#15E49A] to-transparent rounded-full blur-lg opacity-40 animate-pulse"></div>
            <Image
              src="https://avatars.githubusercontent.com/u/94270784?v=4"
              alt="Jonathan Amorim"
              width={250}
              height={250}
              priority
              className="relative rounded-full border-4 border-[#15E49A] object-cover shadow-[0_0_30px_#15E49A40]"
            />
          </div>

          <h1 className="text-6xl md:text-[6rem] font-black uppercase italic leading-[0.85] tracking-tighter">
            Jonathan <br />
            <span className="text-[#15E49A]">Amorim</span>
          </h1>

          <p className="mt-4 text-gray-400 tracking-[0.3em] uppercase text-sm md:text-base">
            Full Stack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
        >
          <div className="border-l-4 border-[#15E49A] pl-6 py-2">
            <h3 className="text-[#15E49A] text-xl md:text-2xl font-bold uppercase italic mb-4 tracking-widest">
              Sobre Mim
            </h3>

            <p className="text-gray-300 text-base md:text-lg leading-relaxed text-justify md:text-left font-light">
              Sou formado em Técnico em Informática pelo IFC (2022) e curso Análise e desenvolvimento de sistemas pelo IFSC. Desenvolvo aplicações completas utilizando tecnologias modernas. Tenho experiência com Java, PHP, JavaScript e frameworks como Next.js, . Atuo tanto no Backend quanto no Frontend, além de possuir forte conhecimento em SQL e boas práticas de desenvolvimento.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 justify-center md:justify-start">
              <a href="#contato" className="bg-[#15E49A] text-black font-bold px-8 py-3 uppercase hover:bg-white hover:scale-105 transition-all text-sm">
                Contato
              </a>
              <a href="#projetos" className="border border-white/30 text-white px-8 py-3 font-bold uppercase hover:border-[#15E49A] hover:text-[#15E49A] transition-all text-sm">
                Projetos
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}