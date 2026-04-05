"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import HeroSection from "@/components/HeroSection";

// ── Reusable reveal ──────────────────────────────────────────────────────────
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

// ── Marquee ──────────────────────────────────────────────────────────────────
function Marquee({ text, dark = true }: { text: string; dark?: boolean }) {
  const items = Array.from({ length: 12 }, (_, i) => i);
  return (
    <div className="overflow-hidden whitespace-nowrap flex py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0"
      >
        {items.map((i) => (
          <span
            key={i}
            className={`px-5 text-xs tracking-[0.25em] font-black ${dark ? "text-gray-800" : "text-gray-200"}`}
          >
            {text} —
          </span>
        ))}
      </motion.div>
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex shrink-0"
        aria-hidden
      >
        {items.map((i) => (
          <span
            key={i}
            className={`px-5 text-xs tracking-[0.25em] font-black ${dark ? "text-gray-800" : "text-gray-200"}`}
          >
            {text} —
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ── SCROLL-DRIVEN CURVED SECTION ─────────────────────────────────────────────
// Inilah komponen kunci — kurva yang bergerak saat scroll, persis seperti Fernando
function ScrollRevealSection({
  children,
  bgColor,
  curveColor,
}: {
  children: React.ReactNode;
  bgColor: string;      // warna background section ini
  curveColor: string;   // warna kurva yang datang dari section sebelumnya
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"], // saat top section masuk viewport bawah → sampai top section menyentuh top viewport
  });

  // Spring untuk gerakan yang smooth dan natural
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    restDelta: 0.001,
  });

  // Kurva bergerak dari bawah (tersembunyi) ke atas (terungkap) saat scroll
  // scaleX dari 1.8 → 1.2: kurva "mengecil" sambil naik — sama persis seperti Fernando
  const curveY = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]);
  const curveScaleX = useTransform(smoothProgress, [0, 1], [1.8, 1.2]);
  const curveScaleY = useTransform(smoothProgress, [0, 1], [1.2, 0.8]);

  return (
    <div ref={ref} className={`relative ${bgColor} overflow-hidden`}>
      {/* Kurva dinamis — bergerak saat scroll */}
      <motion.div
        style={{
          y: curveY,
          scaleX: curveScaleX,
          scaleY: curveScaleY,
        }}
        className={`absolute top-0 left-0 right-0 h-[300px] md:h-[500px] ${curveColor} rounded-b-[100%] -translate-y-[50%] z-10 pointer-events-none`}
      />

      {/* Konten section */}
      <div className="relative z-20">{children}</div>
    </div>
  );
}

// ── DATA ─────────────────────────────────────────────────────────────────────
const featuredProjects = [
  {
    id: "01",
    title: "WebGIS Monitoring",
    tags: ["WebGIS", "Frontend Development"],
    description:
      "A web-based geographic information system for real-time infrastructure monitoring, built with Leaflet.js and React to visualize spatial data across regions.",
    link: "#",
  },
  {
    id: "02",
    title: "Automation Dashboard",
    tags: ["System Automation", "Data Visualization"],
    description:
      "An internal dashboard automating data collection and reporting workflows, reducing manual processes and enabling data-driven decisions.",
    link: "#",
  },
  {
    id: "03",
    title: "Telecom Network Analyzer",
    tags: ["Data Analysis", "Frontend Development"],
    description:
      "A tool for visualizing telecommunication network performance metrics with interactive charts and anomaly detection features.",
    link: "#",
  },
  {
    id: "04",
    title: "IoT Sensor Platform",
    tags: ["IoT", "Real-time Data"],
    description:
      "A platform for collecting and displaying real-time data from IoT sensors, with live graphs, alert systems, and historical data export.",
    link: "#",
  },
];

const experiences = [
  {
    company: "PT. Phillip Sekuritas Indonesia",
    role: "Frontend Engineer",
    period: "March 2026 - Present",
    description:
      "Contributed to the development of a web-based application using React and Next.js, collaborated with the design team to implement responsive UI components.",
  },
  {
    company: "PT. Amanah Karya Indonesia",
    role: "Frontend Developer",
    period: "August 2025 - December 2025",
    description:
      "Developed and implemented ticket widget features using React and Tailwind CSS, collaborated with cross-functional teams.",
  },
  {
    company: "PT. Sagara Asia Teknologi",
    role: "Frontend Developer",
    period: "August 2024 - February 2025",
    description:
      "Developed responsive and interactive user interfaces using React and Next.js, optimized web application performance.",
  },
  {
    company: "Enterprise Data Management Laboratory – Telkom University",
    role: "Laboratory Coordinator",
    period: "September 2024 - December 2025",
    description:
      "Leading and managing operational and academic activities of the EDM Laboratory, mentoring junior members.",
  },
  {
    company: "Bangkit Academy 2024",
    role: "Machine Learning Cohort",
    period: "September 2024 - January 2025",
    description:
      "Participated in an intensive ML program, collaborated on projects involving data analysis and model training.",
  },
  {
    company: "Digistar Class 2024",
    role: "Hustler",
    period: "August 2024 - October 2024",
    description:
      "Engaged in continuous learning in entrepreneurship and business strategies, applied innovative marketing techniques.",
  },
  {
    company: "Blu BCA",
    role: "Blu Ambassador",
    period: "November 2023 - January 2025",
    description:
      "Acted as brand representative promoting products through engaging interactions and events.",
  },
  {
    company: "Microsoft Tel-U Crew",
    role: "Microsoft Representative",
    period: "November 2023 - December 2023",
    description:
      "Mastered Microsoft Technologies in a focused 4-week program, learned Power Pivot for Microsoft Excel.",
  },
];

// ── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="bg-[#050505] text-white">

      {/* ── FIXED SIDEBARS ── */}
      <div className="mix-blend-difference text-white z-40 pointer-events-none fixed inset-0">
        <div className="hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col gap-6 pointer-events-auto">
          {[
            {
              href: "https://linkedin.com/in/badar-baradja-5b1bb820a/",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
                </svg>
              ),
            },
            {
              href: "mailto:badarbaradja112@gmail.com",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              ),
            },
            {
              href: "https://github.com",
              icon: (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              ),
            },
          ].map((item, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4 + i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#90ff4f] hover:scale-125 transition-all duration-200"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2"
        >
          <div className="rotate-90 origin-right tracking-[0.3em] text-xs font-black whitespace-nowrap">
            BADAR ZAKI BARADJA
          </div>
        </motion.div>
      </div>

      {/* ── SECTION 1: HERO ── */}
      <HeroSection />

      {/* ── MARQUEE ── */}
      <div className="bg-[#050505] border-t border-gray-900 overflow-hidden">
        <Marquee text="I AM — WHO I AM — WHO I AM — WHO I AM — WHO" dark />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2: WHO I AM
          bg putih, kurva hitam yang bergerak saat scroll dari atas
      ════════════════════════════════════════════════════════════════════════ */}
      <ScrollRevealSection bgColor="bg-white text-black" curveColor="bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 pt-52 pb-28 flex flex-col items-center text-center">

          <RevealOnScroll>
            <p className="text-xs font-black tracking-widest text-[#90ff4f] bg-black inline-block px-3 py-1 rounded mb-10">
              — WHO I AM —
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] max-w-5xl">
              I'm a Telecommunication Engineering student passionate about{" "}
              <em>frontend development</em>, combining strong IT experience and data
              insight to build engaging web experiences.
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2} className="mt-16">
            <Link
              href="/about"
              className="px-10 py-4 bg-black text-white font-black tracking-widest text-sm hover:bg-[#90ff4f] hover:text-black transition-all duration-300 rounded-md"
            >
              MORE ABOUT ME →
            </Link>
          </RevealOnScroll>
        </div>
      </ScrollRevealSection>

      {/* ── MARQUEE ── */}
      <div className="bg-white border-t border-gray-100 overflow-hidden">
        <Marquee text="CREATIONS — CREATIONS — CREATIONS — CREATIONS" dark={false} />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3: PROJECTS
          bg hitam, kurva putih yang bergerak saat scroll dari atas
      ════════════════════════════════════════════════════════════════════════ */}
      <ScrollRevealSection bgColor="bg-[#050505] text-white" curveColor="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-52 pb-28">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <RevealOnScroll>
              <div className="text-xs tracking-[0.3em] text-gray-600 font-black mb-4">
                CREATIONS — CREATIONS — CREATIONS —
              </div>
              <h2 className="text-5xl md:text-7xl font-black leading-none">
                MY SELECTED
                <br />
                <span className="text-[#90ff4f]">WORKS</span>
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <Link
                href="/projects"
                className="text-xs font-black tracking-widest border border-gray-700 px-6 py-3 hover:border-[#90ff4f] hover:text-[#90ff4f] transition-all duration-300 rounded-md"
              >
                VIEW ALL →
              </Link>
            </RevealOnScroll>
          </div>

          {/* Project rows */}
          <div className="space-y-0">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group border-t border-gray-800 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-white/5 px-4 -mx-4 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-start gap-8">
                  <span className="text-xs text-gray-600 font-black pt-1 w-8 shrink-0">
                    / {project.id}
                  </span>
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] tracking-widest text-gray-500 font-black border border-gray-700 px-2 py-0.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-black group-hover:text-[#90ff4f] transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 max-w-xl leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 text-xs font-black tracking-widest text-gray-600 group-hover:text-[#90ff4f] transition-colors duration-200 flex items-center gap-2"
                >
                  GET TO KNOW PROJECT
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </a>
              </motion.div>
            ))}
            <div className="border-t border-gray-800" />
          </div>
        </div>
      </ScrollRevealSection>

      {/* ── MARQUEE ── */}
      <div className="bg-[#050505] border-t border-gray-900 overflow-hidden">
        <Marquee text="EXPERIENCE — EXPERIENCE — EXPERIENCE — EXPERIENCE" dark />
      </div>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4: EXPERIENCE
          bg putih, kurva hitam dari atas
      ════════════════════════════════════════════════════════════════════════ */}
      <ScrollRevealSection bgColor="bg-white text-black" curveColor="bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 pt-52 pb-28">

          <RevealOnScroll className="mb-20">
            <div className="text-xs tracking-[0.3em] text-gray-400 font-black mb-4">
              EXPERIENCE — EXPERIENCE — EXPERIENCE —
            </div>
            <h2 className="text-5xl md:text-7xl font-black">
              MY <em>JOURNEY</em>
            </h2>
            <p className="text-gray-500 text-sm mt-4">
              Explore my professional journey and the technologies that define my craft
            </p>
          </RevealOnScroll>

          <div className="space-y-0">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="border-t border-gray-100 py-8 grid md:grid-cols-[1fr_2fr] gap-6 hover:bg-gray-50 px-4 -mx-4 rounded-lg transition-colors duration-200"
              >
                <div>
                  <div className="font-black text-base leading-tight">{exp.company}</div>
                  <div className="text-[#90ff4f] bg-black text-[10px] font-black tracking-widest px-2 py-0.5 rounded inline-block mt-2">
                    {exp.role}
                  </div>
                  <div className="text-gray-400 text-xs mt-2 font-bold">{exp.period}</div>
                </div>
                <div className="text-gray-500 text-sm leading-relaxed self-center">
                  {exp.description}
                </div>
              </motion.div>
            ))}
            <div className="border-t border-gray-100" />
          </div>
        </div>
      </ScrollRevealSection>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5: CTA CONTACT
          bg hitam, kurva putih dari atas
      ════════════════════════════════════════════════════════════════════════ */}
      <ScrollRevealSection bgColor="bg-[#050505] text-white" curveColor="bg-white">
        <div className="max-w-7xl mx-auto px-6 pt-52 pb-40 text-center">
          <RevealOnScroll>
            <p className="text-xs tracking-widest text-gray-600 font-black mb-6">
              LET'S WORK TOGETHER
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-8xl font-black leading-[0.9] mb-12">
              LET'S CREATE
              <br />
              <span className="text-[#90ff4f]">SOMETHING</span>
              <br />
              GREAT.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <Link
              href="/contact"
              className="inline-block px-12 py-5 bg-[#90ff4f] text-black font-black tracking-widest text-sm hover:bg-white transition-all duration-300 rounded-md shadow-[0_0_50px_rgba(144,255,79,0.2)]"
            >
              GET STARTED NOW →
            </Link>
          </RevealOnScroll>
        </div>
      </ScrollRevealSection>

    </main>
  );
}