"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Início", href: "#inicio" },
  { name: "Projetos", href: "#projetos" },
  { name: "Trajetória", href: "#trajetoria" },
  { name: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/50 border-b border-white/10 transition-all duration-500">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        
        <Link href="#inicio" className="text-[#15E49A] text-xl font-bold uppercase italic tracking-widest">
          JONATHAN_
        </Link>

        <nav className="hidden md:flex gap-8 text-white/80 text-sm font-bold uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="hover:text-[#15E49A] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#15E49A] hover:text-black transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <motion.path animate={open ? { d: "M18 6L6 18" } : { d: "M4 6h16" }} transition={{ duration: 0.2 }} />
            <motion.path d="M4 12h16" animate={open ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} />
            <motion.path animate={open ? { d: "M6 6l12 12" } : { d: "M4 18h16" }} transition={{ duration: 0.2 }} />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl px-6 py-6 flex flex-col gap-6 text-white text-lg shadow-2xl border-t border-white/10 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setOpen(false)}
                className="hover:text-[#15E49A] font-bold uppercase tracking-widest transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}