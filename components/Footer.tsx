"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Marquee komponen reusable
function Marquee({ text, speed = 25 }: { text: string; speed?: number }) {
  const items = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="overflow-hidden whitespace-nowrap flex">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0"
      >
        {items.map((i) => (
          <span key={i} className="text-xs tracking-[0.25em] font-black text-gray-700 px-6">
            {text} —
          </span>
        ))}
      </motion.div>
      {/* Duplikat untuk seamless loop */}
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0"
        aria-hidden
      >
        {items.map((i) => (
          <span key={i} className="text-xs tracking-[0.25em] font-black text-gray-700 px-6">
            {text} —
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white overflow-hidden">

      {/* ── Marquee scrolling name ── */}
      <div className="border-t border-gray-900 py-4">
        <Marquee text="BADAR ZAKI BARADJA" speed={30} />
      </div>

      {/* ── Main footer content ── */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-10">
        <div className="grid md:grid-cols-[1fr_auto_auto] gap-12 items-start mb-20">

          {/* Left: identity */}
          <div>
            <p className="text-xs tracking-widest text-[#90ff4f] font-bold mb-6">Let's Connect ✦</p>
            {/* Logo/Inisial sama seperti navbar */}
            <div className="text-5xl font-black tracking-tighter mb-2">
              BZ<span className="text-[#90ff4f]">!</span>
            </div>
            <p className="text-gray-500 text-xs font-bold tracking-widest mt-4">FRONTEND DEVELOPER</p>
            <p className="text-gray-700 text-xs mt-1 tracking-widest">BANDUNG, INDONESIA</p>

            <Link
              href="/contact"
              className="inline-block mt-8 px-6 py-3 border border-gray-700 text-xs font-black tracking-widest hover:border-[#90ff4f] hover:text-[#90ff4f] transition-all duration-300 rounded-md"
            >
              CONTACT ME
            </Link>
          </div>

          {/* Center: nav */}
          <div className="flex flex-col gap-4">
            {["HOME", "ABOUT", "PROJECTS", "CONTACT"].map((item) => (
              <Link
                key={item}
                href={item === "HOME" ? "/" : `/${item.toLowerCase()}`}
                className="text-xs font-black tracking-widest text-gray-500 hover:text-white transition-colors duration-200"
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Right: socials */}
          <div className="flex flex-col gap-4">
            <a href="https://instagram.com/badarbaradja_" target="_blank" rel="noopener noreferrer" className="text-xs font-black tracking-widest text-gray-500 hover:text-white transition-colors duration-200">INSTAGRAM</a>
            <a href="https://linkedin.com/in/badar-baradja-5b1bb820a/" target="_blank" rel="noopener noreferrer" className="text-xs font-black tracking-widest text-gray-500 hover:text-white transition-colors duration-200">LINKEDIN</a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-xs font-black tracking-widest text-gray-500 hover:text-white transition-colors duration-200">GITHUB</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-900 pt-8 flex justify-between items-center text-[10px] font-bold tracking-widest text-gray-700">
          <span>© 2026 ALL RIGHTS RESERVED</span>
          <span>BADAR ZAKI BARADJA</span>
        </div>
      </div>
    </footer>
  );
}