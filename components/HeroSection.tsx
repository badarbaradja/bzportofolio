"use client";

import { motion, Variants } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import Link from "next/link";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505]">
      <ParticleBackground />

      <div className="flex flex-col items-center justify-center w-full px-4 text-center z-10">

        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-black uppercase tracking-tighter"
        >
          {/* Baris 1: putih, lebih kecil */}
          <div className="overflow-hidden">
            <motion.span
              variants={wordVariants}
              className="block text-white text-5xl sm:text-6xl md:text-7xl leading-tight"
            >
              BUILDING
            </motion.span>
          </div>

          {/* Baris 2: hijau, besar */}
          <div className="overflow-hidden">
            <motion.span
              variants={wordVariants}
              className="block text-[#90ff4f] text-6xl sm:text-7xl md:text-[9rem] leading-[0.88]"
            >
              DATA-DRIVEN
            </motion.span>
          </div>

          {/* Baris 3: hijau, besar */}
          <div className="overflow-hidden">
            <motion.span
              variants={wordVariants}
              className="block text-[#90ff4f] text-6xl sm:text-7xl md:text-[9rem] leading-[0.88]"
            >
              SOLUTIONS
            </motion.span>
          </div>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-gray-400 text-sm md:text-base max-w-xl mx-auto font-medium leading-relaxed"
        >
          Telecommunication Engineering student specializing in WebGIS development,
          system automation, and data-driven solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex gap-4 flex-wrap justify-center"
        >
          <a
            href="/myCV.pdf"
            download
            className="px-8 py-3 bg-white text-black text-sm font-bold tracking-widest hover:bg-gray-200 transition-all duration-300 rounded-md"
          >
            Download CV
          </a>
          <Link
            href="/contact"
            className="px-8 py-3 bg-[#90ff4f] text-black text-sm font-bold tracking-widest hover:bg-white transition-all duration-300 rounded-md shadow-[0_0_30px_rgba(144,255,79,0.3)]"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-widest font-bold">SCROLL DOWN</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}