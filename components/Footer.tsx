"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#050505] text-white overflow-hidden">

      {/* ── Upper footer: 2 kolom ── */}
      <div className="max-w-7xl mx-auto px-8 pt-20 pb-10">
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">

          {/* Kiri: Logo + nama + role + kota + tombol */}
          <div>
            {/* Logo — sama persis seperti navbar */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-[#90ff4f] flex items-center justify-center rounded">
                <span className="text-black text-sm font-black tracking-tighter">BZ</span>
              </div>
              <div>
                <div className="text-[#90ff4f] text-sm font-black tracking-widest leading-tight">
                  BADAR ZAKI BARADJA
                </div>
                <div className="text-gray-500 text-[10px] font-black tracking-widest">
                  FRONTEND DEVELOPER
                </div>
              </div>
            </div>

            <p className="text-gray-500 text-xs font-bold tracking-widest mt-6 mb-8">
              BANDUNG, INDONESIA
            </p>

            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-[#90ff4f] text-black font-black tracking-widest text-xs hover:bg-white transition-all duration-300 rounded-md"
            >
              CONTACT ME
            </Link>
          </div>

          {/* Kanan: Nav links besar */}
          <div className="flex flex-col gap-1 md:items-start">
            {[
              { label: "HOME", href: "/" },
              { label: "ABOUT", href: "/about" },
              { label: "PROJECTS", href: "/projects" },
              { label: "CONTACT", href: "/contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-4xl md:text-5xl font-black tracking-tight text-white hover:text-[#90ff4f] transition-colors duration-200 leading-tight"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
          <span className="text-[10px] font-bold tracking-widest text-gray-600">
            © 2026 ALL RIGHTS RESERVED
          </span>
          <div className="flex gap-6">
            {[
              { label: "INSTAGRAM", href: "https://instagram.com/badarbaradja_" },
              { label: "LINKEDIN", href: "https://linkedin.com/in/badar-baradja-5b1bb820a/" },
              { label: "GITHUB", href: "https://github.com" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black tracking-widest text-gray-500 hover:text-white transition-colors duration-200"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Marquee bawah — background HIJAU, teks hitam besar ── */}
      <div className="bg-[#90ff4f] overflow-hidden mt-10">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap py-6"
        >
          {Array.from({ length: 20 }).map((_, i) => (
            <span
              key={i}
              className="text-5xl md:text-7xl font-black text-black tracking-tighter px-6 shrink-0"
            >
              BADAR ZAKI BARADJA -&nbsp;
            </span>
          ))}
        </motion.div>
      </div>

    </footer>
  );
}