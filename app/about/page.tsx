"use client";

import { motion } from "framer-motion";

// ── Reusable reveal ─────────────────────────────────────────────────────────
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
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const awards = [
  {
    year: "2025—CURRENT",
    items: [
      { title: "1st Place WebGIS National Competition 2025", org: "Institut Teknologi Bandung", date: "Oct 2025", tag: "WebGIS" },
      { title: "Best Capstone Project – Bangkit Academy 2024", org: "Google, Tokopedia, GoTo, Traveloka", date: "Jan 2025", tag: "Machine Learning" },
    ],
  },
  {
    year: "2024",
    items: [
      { title: "Top 10 Finalist – Digistar Hackathon", org: "Telkom Indonesia", date: "Oct 2024", tag: "Hackathon" },
      { title: "Best Project – EDM Lab Internal Showcase", org: "Telkom University", date: "Sep 2024", tag: "Achievement" },
      { title: "Finalist – National Automation Challenge", org: "Kementerian Kominfo", date: "Jul 2024", tag: "Automation" },
    ],
  },
  {
    year: "2023",
    items: [
      { title: "Blu Ambassador – Best Performer", org: "Bank BCA", date: "Dec 2023", tag: "Achievement" },
      { title: "Microsoft Technologies Certification", org: "Microsoft x Telkom University", date: "Dec 2023", tag: "Certification" },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#050505] text-white min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-40 pb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs tracking-widest text-gray-500 font-black mb-6"
        >
          ABOUT
        </motion.p>

        {/* Headline — kata per kata slide up */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-black uppercase leading-[0.9] tracking-tighter max-w-5xl"
          >
            OVER 2 YEARS OF EXPERIENCE, CONTINUOUSLY PUSHING THE BOUNDARIES OF{" "}
            <span className="text-[#90ff4f]">DEVELOPMENT & DATA.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed uppercase tracking-wide font-medium"
        >
          ENTHUSIASTIC ABOUT CRAFTING SEAMLESS EXPERIENCES THAT COMBINE GEOSPATIAL DATA,
          SYSTEM AUTOMATION, AND MODERN WEB TECHNOLOGIES.
        </motion.p>
      </section>

      {/* ── PROFILE (putih) ── */}
      <section className="bg-white text-black py-24 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[150vw] md:w-[120vw] h-[200px] md:h-[300px] bg-[#050505] rounded-[100%] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left: Image */}
          <RevealOnScroll>
            <div className="relative">
              <div className="w-full aspect-[3/4] bg-gray-100 rounded-2xl overflow-hidden flex items-center justify-center">
                <img
                  src="/profile.jpg"
                  alt="Badar Zaki Baradja"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                {/* Placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                  </svg>
                  <p className="text-xs mt-2 font-medium">Add profile.jpg to /public</p>
                </div>
              </div>

              {/* Badge floating */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-6 -right-4 bg-black text-white px-6 py-4 rounded-xl shadow-2xl"
              >
                <div className="text-[10px] font-black tracking-widest text-gray-400">BADAR ZAKI BARADJA</div>
                <div className="text-[#90ff4f] text-[10px] font-black tracking-widest mt-1">FRONTEND DEVELOPER</div>
              </motion.div>
            </div>
          </RevealOnScroll>

          {/* Right: Quote + Stats */}
          <RevealOnScroll delay={0.15}>
            <div className="text-6xl text-gray-200 font-black leading-none mb-4">"</div>
            <p className="text-xl md:text-2xl font-black leading-tight mb-10">
              I build data-driven web applications by combining geospatial technology with
              clean, performant frontend code to deliver meaningful results.
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-6 mt-10 pt-10 border-t border-gray-100">
              {[
                { num: "3.8", label: "/ 01  GPA" },
                { num: "10+", label: "/ 02  PROJECTS" },
                { num: "5+", label: "/ 03  AWARD RECOGNITIONS" },
                { label: "/ 04  ORGANIZATIONAL EXPERIENCE", sub: "ACTIVE IN CAMPUS ORGANIZATIONS" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  {stat.num && <div className="text-4xl font-black">{stat.num}</div>}
                  <div className="text-[10px] font-black tracking-widest text-gray-400 mt-1">{stat.label}</div>
                  {stat.sub && <div className="text-[9px] text-gray-400 mt-1">{stat.sub}</div>}
                </motion.div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── AWARDS (hitam) ── */}
      <section className="bg-[#050505] text-white py-32 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[150vw] md:w-[120vw] h-[200px] md:h-[300px] bg-white rounded-[100%] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <RevealOnScroll className="mb-20">
            <div className="text-xs tracking-[0.3em] text-gray-600 font-black mb-4">
              ACHIEVEMENT — ACHIEVEMENT — ACHIEVEMENT —
            </div>
            <h2 className="text-5xl md:text-7xl font-black">
              AWARDS &amp; <span className="text-[#90ff4f]">HONORS</span>
            </h2>
          </RevealOnScroll>

          {awards.map((group) => (
            <div key={group.year} className="mb-12">
              <div className="text-xs text-gray-700 font-black tracking-widest border-b border-gray-800 pb-3 mb-2">
                {group.year}
              </div>
              {group.items.map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-gray-800 py-6 grid md:grid-cols-[1fr_auto] gap-4 items-center group hover:bg-white/5 px-2 -mx-2 rounded transition-colors duration-200"
                >
                  <div>
                    <h3 className="font-black text-lg group-hover:text-[#90ff4f] transition-colors duration-200">
                      {award.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">{award.org}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-gray-600 font-bold">{award.date}</div>
                    <div className="text-[10px] tracking-widest text-[#90ff4f] font-black mt-1 border border-[#90ff4f]/30 px-2 py-0.5 rounded-full inline-block">
                      {award.tag}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}