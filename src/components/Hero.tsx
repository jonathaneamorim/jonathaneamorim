"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-center relative px-6 overflow-hidden">

      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#15E49A]/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#15E49A]/5 rounded-full blur-[120px]" />

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full gap-12">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-right"
        >
          <div className="relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-br from-[#15E49A] to-transparent rounded-full blur opacity-40"></div>
            <Image
              src="https://avatars.githubusercontent.com/u/94270784?v=4"
              width={230}
              height={230}
              alt="Jonathan Amorim"
              className="relative rounded-full border-2 border-[#15E49A]"
            />
          </div>

          <h1 className="text-7xl md:text-9xl font-black uppercase italic mt-6 leading-[0.8]">
            Jonathan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#15E49A] to-white">
              Amorim
            </span>
          </h1>

          <p className="mt-3 text-gray-400 tracking-widest uppercase">
            Full Stack Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="max-w-xl"
        >
          <h3 className="text-[#15E49A] text-xl font-bold uppercase italic mb-4 tracking-widest">
            Sobre Mim
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed">
            Sou formado em Técnico em Informática pelo IFC (2022) e desenvolvo aplicações
            completas utilizando tecnologias modernas. Tenho experiência com .NET, Java, PHP,
            JavaScript e frameworks como Angular e Vue.js. Atuo tanto no Backend quanto no Frontend,
            além de possuir forte conhecimento em SQL e boas práticas de desenvolvimento.
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href="#contato"
              className="bg-[#15E49A] text-black font-bold px-8 py-3 uppercase hover:scale-110 transition-all"
            >
              Contato
            </a>
            <a
              href="#projetos"
              className="border border-white/30 px-8 py-3 font-bold uppercase hover:border-[#15E49A] hover:text-[#15E49A]"
            >
              Projetos
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
