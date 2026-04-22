"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeroSection from "@/components/HeroSection";

// Custom easing for premium fluid feel
const fluidEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1.2, delay, ease: fluidEase }}
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
  const ballY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

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
    title: "ThinkSpace Platform",
    tags: "STARTUP INCUBATION, BUSINESS MODEL",
    description: "Actively participating in the Bandung Techno Park (BTP) startup incubation program at Telkom University to develop business and technical models.",
    link: "https://thinkspace-mhbdlpts8-badars-projects-de5bd3fa.vercel.app/",
    image: "/thinkspace.png",
  },
  {
    id: "02",
    title: "Lab Management Dashboard Electrical Circuit Lab",
    tags: "WEB DEVELOPMENT, AUTOMATION",
    description: "Engineered an administrative dashboard automating camera-based attendance, salary slips, and penalty calculations for 49 assistants.",
    link: "https://lab-rl-b5rsx1691-badars-projects-de5bd3fa.vercel.app/",
    image: "/electrical_lab.png",
  },
  {
    id: "03",
    title: "ERP MBC Lab Repository",
    tags: "WEBGIS, ERP SYSTEM",
    description: "Co-developed an ERP-like laboratory management system to streamline operations, project tracking, and assignments for 78 research assistants.",
    link: "/projects",
    image: "/mbc_erp.png",
  },
  {
    id: "04",
    title: "WebGis Bandung",
    tags: "WEBGIS, Navigation",
    description: "Conducted GIS research and developed a WebGIS application for Bandung city, providing interactive maps and navigation features to enhance tourism experiences.",
    link: "https://badarbaradja.github.io/percobaan_webgis/",
    image: "/webgis_bandung.png",
  },
];

const experiences = [
  {
    company: "MBC Laboratory",
    role: "Research Assistant",
    period: "Oct 2025 - Present",
    description: "Conducted GIS research, secured an HKI certificate, co-developed an ERP-like laboratory management system, and engineered a digital knowledge repository."
  },
  {
    company: "Electrical Circuit Laboratory",
    role: "Practicum Assistant",
    period: "May 2025 - Present",
    description: "Mentored students, developed a comprehensive lab management website, and engineered an administrative dashboard replacing manual Google Forms operations."
  },
  {
    company: "Himpunan Mahasiswa Teknik Telekomunikasi (HMTT)",
    role: "Academic Expert Staff",
    period: "Jun 2025 - Dec 2025",
    description: "Contributed to academic development programs, facilitated academic discussions, and collaborated to execute faculty-level educational events."
  },
  {
    company: "Telecommunication Science Association (TOSCA)",
    role: "Deputy Chair",
    period: "May 2025 - Dec 2025",
    description: "Assisted in leading structural operations, coordinated the execution of division work programs, and evaluated organizational performance."
  },
  {
    company: "GATHRAK",
    role: "Logistics Member",
    period: "Apr 2025 - Jun 2025",
    description: "Managed equipment requirements and collaborated with the PDD division to execute event decorations smoothly."
  },
  {
    company: "PRADA",
    role: "Public Relations Member",
    period: "Jan 2025 - Mar 2025",
    description: "Operated within the Donaturial division to establish external communications and successfully raised funds for Ramadan 2025 events."
  },
  {
    company: "PT Dabi Air Nusantara",
    role: "Intern",
    period: "Jun 2024 - Sep 2024",
    description: "Managed spare parts data, developed an automated maintenance tracking system, and created a monitoring system for crew licenses."
  },
  {
    company: "HSC 2022",
    role: "Secretary of Public Relations",
    period: "Aug 2021 - Dec 2022",
    description: "Managed participant databases, coordinated committee members, and successfully reached 90+ schools with 1,235 participants for a hybrid event."
  },
  {
    company: "OSIS NFBS Serang",
    role: "Secretary of Sports Division",
    period: "Jul 2021 - Jan 2023",
    description: "Coordinated student sports activities, drafted division work programs, and provided comprehensive technical and administrative support for division operations."
  }
];

function ProjectCard({ project, index }: { project: typeof featuredProjects[0]; index: number }) {
  const isEven = index % 2 === 0;
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1.2, ease: fluidEase }}
      className="grid md:grid-cols-2 gap-0 items-stretch"
    >
      <div className={isEven ? "md:order-1" : "md:order-2"}>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full group overflow-hidden rounded-2xl">
          <div className="relative w-full h-75 md:h-100 bg-gray-900 overflow-hidden rounded-2xl transform transition-transform duration-[1.5s] ease-[0.22,1,0.36,1]">
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 1.5, ease: fluidEase }}
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
              onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
            />
            <div className="absolute inset-0 flex items-end p-6 bg-linear-to-t from-black/60 to-transparent">
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
          <span className="w-10 h-10 rounded-full bg-[#90ff4f] flex items-center justify-center group-hover:bg-white transition-colors duration-500 shrink-0">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5" className="group-hover:rotate-45 transition-transform duration-500">
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

  const ExperienceContent = () => (
    <>
      <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-1">{exp.company}</h3>
      <p className="text-sm font-black text-[#90ff4f] mb-3">{exp.role}</p>
      <p className="text-gray-400 text-sm leading-relaxed mb-2">{exp.description}</p>
      <p className="text-gray-600 text-xs font-bold">{exp.period}</p>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 1.2, ease: fluidEase }}
      className="relative flex md:grid md:grid-cols-[1fr_auto_1fr] items-start md:items-center gap-0 md:gap-8 py-6 md:py-10"
    >
      <div className={`hidden md:block text-right ${!isLeft ? "opacity-0 invisible" : ""}`}>
        <ExperienceContent />
      </div>

      <div className="absolute left-0 md:relative md:left-auto flex justify-center items-center w-8 z-10 top-[28px] md:top-auto">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: fluidEase }}
          className="w-4 h-4 rounded-full bg-[#050505] border-[3px] border-[#90ff4f] shadow-[0_0_15px_rgba(144,255,79,0.8)]"
        />
      </div>

      <div className={`pl-12 md:pl-0 w-full text-left ${isLeft ? "md:opacity-0 md:invisible" : ""}`}>
        <ExperienceContent />
      </div>
    </motion.div>
  );
}

function JourneyTimeline({ experiences }: { experiences: any[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={containerRef} className="relative max-w-5xl mx-auto py-10">
      <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gray-900 md:-translate-x-1/2 rounded-full" />

      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-[15px] md:left-1/2 top-0 w-[2px] bg-[#90ff4f] md:-translate-x-1/2 origin-top shadow-[0_0_20px_rgba(144,255,79,0.6)] z-0 rounded-full"
      />

      <div className="relative z-10 flex flex-col">
        {experiences.map((exp, i) => (
          <TimelineItem key={i} exp={exp} index={i} />
        ))}
      </div>
    </div>
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
          { href: "https://instagram.com/badarbaraja", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg> },
          { href: "https://github.com", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg> },
        ].map((item, i) => (
          <motion.a key={i} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 + i * 0.1, duration: 1, ease: fluidEase }} href={item.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-[#90ff4f] hover:scale-125 transition-all duration-300">
            {item.icon}
          </motion.a>
        ))}
      </div>

      {/* Fixed sidebar kanan */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1.2, ease: fluidEase }} className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-40">
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
              <em>frontend development</em>, combining strong engineering fundamentals with a high standard of modern, smooth UI/UX design to build engaging web experiences.
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2} className="mt-16">
            <Link href="/about" className="px-10 py-4 bg-black text-white font-black tracking-widest text-sm hover:bg-[#90ff4f] hover:text-black hover:scale-105 transition-all duration-500 rounded-md inline-block">
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
              <Link href="/projects" className="text-xs font-black tracking-widest bg-[#90ff4f] text-black px-6 py-3 hover:bg-white hover:scale-105 transition-all duration-500 rounded-md inline-block">
                VIEW ALL
              </Link>
            </RevealOnScroll>
          </div>
          <div className="space-y-24 md:space-y-32">
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
        <div className="max-w-6xl mx-auto px-6 pt-24 pb-10">
          <RevealOnScroll className="text-center mb-10 md:mb-20">
            <div className="text-xs tracking-[0.3em] text-[#90ff4f] font-black mb-4">— EXPERIENCE — EXPERIENCE —</div>
            <h2 className="text-5xl md:text-7xl font-black text-white">MY JOURNEY</h2>
            <p className="text-gray-500 text-sm mt-4">Explore my professional journey and the technologies that define my craft</p>
          </RevealOnScroll>

          <JourneyTimeline experiences={experiences} />

        </div>
      </section>

      {/* LET'S CONNECT marquee besar */}
      <LetsConnectMarquee />

    </main>
  );
}