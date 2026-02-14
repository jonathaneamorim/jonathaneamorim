"use client";

import { motion } from "framer-motion";

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-16 w-full text-center"
    >
      <h2 className="text-5xl md:text-7xl font-black uppercase italic text-white tracking-tight">
        {title} {subtitle && <span className="text-[#15E49A]">{subtitle}</span>}
      </h2>
    </motion.div>
  );
}