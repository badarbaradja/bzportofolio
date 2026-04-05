"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroSection from "@/components/HeroSection";

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

function Marquee({ text, dark = true, speed = 28 }: { text: string; dark?: boolean; speed?: number }) {
  return (
    <div className="overflow-hidden whitespace-nowrap py-5">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        className="flex"
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className={`px-5 text-xs tracking-[0.25em] font-black shrink-0 ${dark ? "text-gray-700" : "text-gray-400"}`}>
            {text} —
          </span>
        ))}
      </motion.div>
    </div>
  );
}

function CurvedRevealSection({
  children, bgColor, ballColor, marqueeText, marqueeOnDark = true,
}: {
  children: React.ReactNode;
  bgColor: string;
  ballColor: string;
  marqueeText?: string;
  marqueeOnDark?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start 0.2"] });
  const ballY = useTransform(scrollYProgress, [0, 1], ["0%", "-105%"]);

  return (
    <div ref={ref} className={`relative ${bgColor} overflow-hidden`}>
      {marqueeText && (
        <div className={`border-t ${marqueeOnDark ? "border-gray-900" : "border-gray-100"}`}>
          <Marquee text={marqueeText} dark={marqueeOnDark} />
        </div>
      )}
      <motion.div style={{ y: ballY }} className={`absolute inset-x-0 top-0 z-10 pointer-events-none ${ballColor}`}>
        <div className="w-[200%] -translate-x-1/4 rounded-b-[100%]" style={{ height: "90vw", minHeight: "700px", maxHeight: "900px" }} />
      </motion.div>
      <div className="relative z-20">{children}</div>
    </div>
  );
}

const featuredProjects = [
  {
    id: "01",
    title: "WebGIS Monitoring",
    tags: "WEBGIS, FRONTEND DEVELOPMENT",
    description: "A web-based geographic information system for real-time infrastructure monitoring, built with Leaflet.js and React to visualize spatial data across regions.",
    link: "#",
    image: "/projects/webgis.png",
  },
  {
    id: "02",
    title: "Automation Dashboard",
    tags: "SYSTEM AUTOMATION, DATA VISUALIZATION",
    description: "An internal dashboard automating data collection and reporting workflows, reducing manual processes and enabling data-driven decisions.",
    link: "#",
    image: "/projects/dashboard.png",
  },
  {
    id: "03",
    title: "Telecom Network Analyzer",
    tags: "DATA ANALYSIS, FRONTEND DEVELOPMENT",
    description: "A tool for visualizing telecommunication network performance metrics with interactive charts and anomaly detection features.",
    link: "#",
    image: "/projects/analyzer.png",
  },
  {
    id: "04",
    title: "IoT Sensor Platform",
    tags: "IOT, REAL-TIME DATA",
    description: "A platform for collecting and displaying real-time data from IoT sensors, with live graphs, alert systems, and historical data export.",
    link: "#",
    image: "/projects/iot.png",
  },
];

const experiences = [
  {
    company: "PT. Phillip Sekuritas Indonesia",
    role: "Frontend Engineer",
    period: "March 2026 - Present",
    description: "Contributed to the development of a web-based application using React and Next.js, collaborated with the design team to implement responsive UI components, and participated in code reviews to ensure code quality.",
  },
  {
    company: "PT. Amanah Karya Indonesia",
    role: "Frontend Developer",
    period: "August 2025 - December 2025",
    description: "Developed and implemented ticket widget features using React and Tailwind CSS, collaborated with cross-functional teams, and maintained UI/UX consistency with brand guidelines.",
  },
  {
    company: "PT. Sagara Asia Teknologi",
    role: "Frontend Developer",
    period: "August 2024 - February 2025",
    description: "Developed responsive and interactive user interfaces using React and Next.js, optimized web application performance for faster loading times and improved SEO.",
  },
  {
    company: "Enterprise Data Management Laboratory – Telkom University",
    role: "Laboratory Coordinator",
    period: "September 2024 - December 2025",
    description: "Leading and managing operational and academic activities of the EDM Laboratory, coordinating internal divisions, and mentoring junior members.",
  },
  {
    company: "Bangkit Academy 2024",
    role: "Machine Learning Cohort",
    period: "September 2024 - January 2025",
    description: "Participated in an intensive learning program focused on Machine Learning concepts, collaborated on projects involving data analysis and model training.",
  },
  {
    company: "Digistar Class 2024",
    role: "Hustler",
    period: "August 2024 - October 2024",
    description: "Engaged in continuous learning to develop skills in entrepreneurship and business strategies, applied innovative marketing techniques.",
  },
  {
    company: "Blu BCA",
    role: "Blu Ambassador",
    period: "November 2023 - January 2025",
    description: "Acted as brand representative promoting products through engaging interactions and events, fostered community engagement and provided feedback on customer experiences.",
  },
  {
    company: "Microsoft Tel-U Crew",
    role: "Microsoft Representative",
    period: "November 2023 - December 2023",
    description: "Mastered Microsoft Technologies in a focused 4 weeks program, learned Power Pivot for Microsoft Excel to configure formulas.",
  },
];

function ProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="grid md:grid-cols-2 gap-0 items-stretch"
    >
      <div className={isEven ? "md:order-1" : "md:order-2"}>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
          <div className="relative w-full h-[300px] md:h-[400px] bg-gray-900 overflow-hidden rounded-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-700"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-7xl font-black text-white/10">{project.id}</span>
            </div>
          </div>
        </a>
      </div>
      <div className={`flex flex-col justify-center px-8 md:px-12 py-10 ${isEven ? "md:order-2" : "md:order-1"}`}>
        <span className="text-[#90ff4f] text-xs font-black tracking-widest mb-3">/ {project.id}</span>
        <h3 className="text-4xl md:text-5xl font-black text-[#90ff4f] leading-tight mb-3">{project.title}</h3>
        <p className="text-xs tracking-widest text-gray-500 font-black mb-4">{project.tags}</p>
        <p className="text-gray-400 text-sm leading-relaxed mb-8">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 group w-fit">
          <span className="w-10 h-10 rounded-full bg-[#90ff4f] flex items-center justify-center group-hover:bg-white transition-colors duration-300 shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
            </svg>
          </span>
          <span className="text-sm font-black text-white group-hover:text-[#90ff4f] transition-colors duration-300">Get to know project</span>
        </a>
      </div>
    </motion.div>
  );
}

function TimelineItem({ exp, index }: { exp: typeof experiences[0]; index: number }) {
  const isLeft = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-[1fr_24px_1fr]"
    >
      <div className={`py-12 pr-10 ${isLeft ? "text-right" : ""}`}>
        {isLeft && (
          <>
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-1">{exp.company}</h3>
            <p className="text-sm font-black text-gray-300 mb-3">{exp.role}</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-2">{exp.description}</p>
            <p className="text-gray-600 text-xs font-bold">{exp.period}</p>
          </>
        )}
      </div>

      <div className="flex flex-col items-center">
        <div className="w-px flex-1 bg-[#90ff4f]" style={{ minHeight: 40 }} />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-3 h-3 rounded-full bg-[#90ff4f] shrink-0 shadow-[0_0_12px_rgba(144,255,79,0.9)]"
        />
        <div className="w-px flex-1 bg-[#90ff4f]" style={{ minHeight: 40 }} />
      </div>

      <div className="py-12 pl-10">
        {!isLeft && (
          <>
            <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-1">{exp.company}</h3>
            <p className="text-sm font-black text-gray-300 mb-3">{exp.role}</p>
            <p className="text-gray-500 text-sm leading-relaxed mb-2">{exp.description}</p>
            <p className="text-gray-600 text-xs font-bold">{exp.period}</p>
          </>
        )}
      </div>
    </motion.div>
  );
}

function LetsConnectMarquee() {
  return (
    <div className="bg-[#050505] overflow-hidden border-t border-gray-900 py-6">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap"
        style={{ transform: "rotate(-1.5deg)", transformOrigin: "center" }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <span key={i} className="text-4xl md:text-6xl font-black text-white tracking-tight px-3 shrink-0">
            LET'S CONNECT ✦&nbsp;
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="bg-[#050505] text-white">

      {/* Fixed sidebar kiri */}
      <div className="hidden md:flex flex-col gap-6 fixed left-8 top-1/2 -translate-y-1/2 z-40">
        {[
          { href: "https://linkedin.com/in/badar-baradja-5b1bb820a/", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
          { href: "https://instagram.com/badarbaradja_", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
          { href: "https://github.com", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg> },
        ].map((item, i) => (
          <motion.a key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 + i * 0.1, duration: 0.6 }} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#90ff4f] hover:scale-125 transition-all duration-200">
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* Fixed sidebar kanan */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }} className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
        <div className="text-[9px] tracking-[0.35em] font-black text-gray-600 whitespace-nowrap" style={{ writingMode: "vertical-rl" }}>
          BADAR ZAKI BARADJA
        </div>
      </motion.div>

      {/* HERO */}
      <HeroSection />

      {/* WHO I AM — bg putih, bola hitam */}
      <CurvedRevealSection bgColor="bg-white text-black" ballColor="bg-[#050505]" marqueeText="I AM — WHO I AM — WHO I AM — WHO I AM — WHO" marqueeOnDark={true}>
        <div className="max-w-5xl mx-auto px-6 pt-40 pb-28 flex flex-col items-center text-center">
          <RevealOnScroll>
            <p className="text-xs font-black tracking-[0.3em] text-[#90ff4f] mb-10">— WHO I AM — WHO I AM —</p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.15] text-black">
              I'm a Telecommunication Engineering student passionate about{" "}
              <em>frontend development</em>, combining strong IT experience and data insight to build engaging web experiences.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2} className="mt-16">
            <Link href="/about" className="px-10 py-4 bg-black text-white font-black tracking-widest text-sm hover:bg-[#90ff4f] hover:text-black transition-all duration-300 rounded-md">
              MORE ABOUT ME →
            </Link>
          </RevealOnScroll>
        </div>
      </CurvedRevealSection>

      {/* MY SELECTED WORKS — bg hitam, bola putih */}
      <CurvedRevealSection bgColor="bg-[#050505] text-white" ballColor="bg-white" marqueeText="CREATIONS — CREATIONS — CREATIONS — CREATIONS" marqueeOnDark={false}>
        <div className="max-w-7xl mx-auto px-6 pt-40 pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
            <RevealOnScroll>
              <div className="text-xs tracking-[0.3em] text-[#90ff4f] font-black mb-4">— CREATIONS — CREATIONS — CREATIONS —</div>
              <h2 className="text-5xl md:text-7xl font-black leading-none text-white">
                MY SELECTED<br />WORKS
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <Link href="/projects" className="text-xs font-black tracking-widest bg-[#90ff4f] text-black px-6 py-3 hover:bg-white transition-all duration-300 rounded-md">
                VIEW ALL
              </Link>
            </RevealOnScroll>
          </div>
          <div className="space-y-16">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </CurvedRevealSection>

      {/* MY JOURNEY — timeline */}
      <section className="bg-[#050505] text-white">
        <div className="border-t border-gray-900 overflow-hidden">
          <Marquee text="EXPERIENCE — EXPERIENCE — EXPERIENCE — EXPERIENCE" dark />
        </div>
        <div className="max-w-5xl mx-auto px-6 pt-24 pb-10">
          <RevealOnScroll className="text-center mb-20">
            <div className="text-xs tracking-[0.3em] text-[#90ff4f] font-black mb-4">— EXPERIENCE — EXPERIENCE —</div>
            <h2 className="text-5xl md:text-7xl font-black text-white">MY JOURNEY</h2>
            <p className="text-gray-500 text-sm mt-4">Explore my professional journey and the technologies that define my craft</p>
          </RevealOnScroll>
          <div>
            {experiences.map((exp, i) => (
              <TimelineItem key={i} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* LET'S CONNECT marquee besar */}
      <LetsConnectMarquee />

    </main>
  );
}