"use client";

import { motion } from "framer-motion";
import React from "react";

// Custom easing for premium fluid feel
const fluidEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Reusable reveal (Hanya untuk konten di bawah fold / yang di-scroll) ──
function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      // Animasi berulang (muncul saat scroll down, hilang saat scroll up)
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: fluidEase }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const experiences = [
  {
    year: "2025—PRESENT",
    items: [
      { title: "Research Assistant (GIS Division)", org: "MBC Laboratory", date: "Oct 2025", tag: "Research & WebGIS" },
      { title: "Practicum Assistant", org: "Electrical Circuit Laboratory", date: "May 2025", tag: "Education & Dev" },
    ],
  },
  {
    year: "2025",
    items: [
      { title: "Deputy Chair", org: "TOSCA", date: "May 2025", tag: "Leadership" },
      { title: "Academic Expert Staff", org: "HMTT", date: "Jun 2025", tag: "Academic" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "Intern", org: "PT Dabi Air Nusantara", date: "Jun 2024", tag: "System Automation" },
      { title: "National PKM Selection Pass", org: "Universitas Telkom", date: "2024", tag: "Achievement" },
    ],
  },
  {
    year: "2021—2023",
    items: [
      { title: "Secretary of Sports Div.", org: "OSIS NFBS Serang", date: "Jul 2021", tag: "Organization" },
      { title: "Secretary of PR Div.", org: "HSC 2022", date: "Aug 2021", tag: "Event Management" },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen selection:bg-[#90ff4f] selection:text-black overflow-x-hidden">

      {/* ── HERO (Animasi On-Load Otomatis) ── */}
      <section className="pt-32 md:pt-40 pb-16 md:pb-32 px-6 md:px-12 border-b border-gray-900">
        <div className="max-w-[1400px] mx-auto">
          {/* Label About Me */}
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: fluidEase }}
            className="flex items-center gap-4 mb-8 md:mb-12"
          >
            <div className="w-2 h-2 bg-[#90ff4f] rounded-full" />
            <p className="text-xs tracking-[0.3em] text-gray-400 font-black">
              ABOUT ME
            </p>
          </motion.div>

          {/* Headline Raksasa */}
          <div className="overflow-hidden mb-8 md:mb-16">
            <motion.h1
              initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.1, ease: fluidEase }}
              className="text-[11vw] md:text-[7vw] lg:text-[6rem] xl:text-[7rem] font-black uppercase leading-[0.9] md:leading-[0.85] tracking-tighter break-words"
            >
              OVER 2 YEARS OF <br />
              <span className="text-gray-600">EXPERIENCE,</span> CONTINUOUSLY <br />
              PUSHING BOUNDARIES IN <br />
              <span className="text-[#90ff4f]">DEVELOPMENT & DATA.</span>
            </motion.h1>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: fluidEase }}
            className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed uppercase tracking-widest font-medium"
          >
            ENTHUSIASTIC ABOUT CRAFTING SEAMLESS EXPERIENCES THAT COMBINE GEOSPATIAL DATA,
            SYSTEM AUTOMATION, AND MODERN WEB TECHNOLOGIES.
          </motion.p>
        </div>
      </section>

      {/* ── PROFILE & STATS (Animasi On-Scroll) ── */}
      <section className="py-16 md:py-24 px-6 md:px-12 border-b border-gray-900 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-32 items-start">

          {/* Kiri: Foto Profile */}
          <RevealOnScroll>
            <div className="relative group w-full max-w-md mx-auto lg:max-w-none">
              {/* 💡 CARA GANTI FOTO:
                1. Masukkan fotomu ke folder `public/`
                2. Beri nama file fotomu `profile.jpg`
                3. Pastikan resolusinya cukup bagus (misal: 800x1000)
                4. Ubah `aspect-[4/5]` jadi `aspect-square` di bawah ini jika fotomu rasio 1:1 (kotak) 
              */}
              <div className="w-full aspect-[4/5] bg-gray-900 overflow-hidden flex items-center justify-center transform transition-transform duration-[1.5s] ease-[0.22,1,0.36,1] rounded-sm">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: fluidEase }}
                  src="/profile.jpg"
                  alt="Badar Zaki Baradja"
                  draggable="false"
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                
                {/* Fallback Jika Gambar Gagal Dimuat */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-700 pointer-events-none -z-10">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="md:w-16 md:h-16">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <p className="text-[10px] md:text-xs mt-3 font-medium tracking-widest uppercase">/public/profile.jpg</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Kanan: Kutipan & Grid Statistik */}
          <div className="flex flex-col justify-center h-full pt-4 lg:pt-0">
            <RevealOnScroll delay={0.15}>
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-black leading-[1.2] md:leading-[1.1] mb-12 md:mb-16 uppercase tracking-tighter">
                "I build data-driven web applications by combining geospatial technology with
                clean, performant frontend code to deliver <span className="text-[#90ff4f]">meaningful results.</span>"
              </h2>
            </RevealOnScroll>

            {/* Grid Statistik - Menyesuaikan jarak di mobile */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-12 pt-10 md:pt-12 border-t border-gray-900">
              {[
                { num: "3.70", label: "GPA SCORE" },
                { num: "97", label: "CREDITS (SKS) COMPLETED" },
                { num: "6+", label: "ORGANIZATIONS & LABS" },
                { label: "ACADEMIC EXCELLENCE", sub: "PASSED NATIONAL PKM SELECTION" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, margin: "-50px" }}
                  transition={{ duration: 1.2, delay: 0.2 + i * 0.1, ease: fluidEase }}
                  className="flex flex-col"
                >
                  <div className="text-[10px] font-black tracking-[0.2em] text-[#90ff4f] mb-2 md:mb-3">/ 0{i + 1}</div>
                  {stat.num && <div className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-1 md:mb-2">{stat.num}</div>}
                  <div className="text-[10px] md:text-xs font-black tracking-widest text-white uppercase">{stat.label}</div>
                  {stat.sub && <div className="text-[8px] md:text-[10px] text-gray-500 tracking-widest uppercase mt-1 md:mt-2 leading-relaxed">{stat.sub}</div>}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── EXPERIENCE & HONORS (Animasi On-Scroll) ── */}
      <section className="py-16 md:py-32 px-6 md:px-12 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto">
          
          <RevealOnScroll className="mb-16 md:mb-32">
            <div className="text-xs tracking-[0.3em] text-[#90ff4f] font-black mb-4 md:mb-6">
              / BACKGROUND
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter uppercase leading-none break-words">
              EXPERIENCE &amp; <br /> <span className="text-gray-600">RECOGNITION</span>
            </h2>
          </RevealOnScroll>

          {/* List Experiences */}
          <div className="border-t border-gray-900">
            {experiences.map((group, groupIndex) => (
              <div key={group.year} className="grid md:grid-cols-[150px_1fr] lg:grid-cols-[250px_1fr] border-b border-gray-900">
                
                {/* Kolom Kiri: Tahun */}
                <div className="py-6 md:py-8 pr-4 md:pr-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, margin: "-50px" }}
                    transition={{ duration: 1.2, ease: fluidEase }}
                    className="text-xs md:text-sm text-gray-500 font-black tracking-[0.2em] md:sticky md:top-32"
                  >
                    {group.year}
                  </motion.div>
                </div>
                
                {/* Kolom Kanan: Detail Experience */}
                <div className="flex flex-col">
                  {group.items.map((experience, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      viewport={{ once: false, margin: "-50px" }}
                      transition={{ duration: 1.2, delay: i * 0.1, ease: fluidEase }}
                      className={`py-6 md:py-8 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-4 md:gap-12 items-start group ${
                        i !== group.items.length - 1 ? "border-b border-gray-900" : ""
                      }`}
                    >
                      <div>
                        <h3 className="font-black text-lg md:text-2xl uppercase tracking-tight group-hover:text-[#90ff4f] transition-colors duration-300 mb-1 md:mb-2">
                          {experience.title}
                        </h3>
                        <p className="text-gray-500 text-xs md:text-sm tracking-widest uppercase">{experience.org}</p>
                      </div>
                      <div className="flex flex-row sm:flex-col justify-between sm:justify-start sm:text-right shrink-0 gap-2 items-center sm:items-end">
                        <div className="text-[10px] md:text-xs text-white font-black tracking-widest uppercase">{experience.date}</div>
                        <div className="text-[8px] md:text-[10px] tracking-widest text-gray-500 font-black uppercase">
                          [ {experience.tag} ]
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </main>
  );
}