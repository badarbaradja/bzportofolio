"use client";

import { motion } from "framer-motion";
import Link from "next/link";

function RevealOnScroll({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

const allProjects = [
  {
    id: "01",
    title: "WebGIS Monitoring",
    tags: ["WebGIS", "Frontend Development"],
    description: "A web-based geographic information system for real-time infrastructure monitoring, built with Leaflet.js and React to visualize spatial data across regions.",
    link: "#",
    image: "/projects/webgis.png",
  },
  {
    id: "02",
    title: "Automation Dashboard",
    tags: ["System Automation", "Data Visualization"],
    description: "An internal dashboard automating data collection and reporting workflows, reducing manual processes and enabling data-driven decisions across teams.",
    link: "#",
    image: "/projects/dashboard.png",
  },
  {
    id: "03",
    title: "Telecom Network Analyzer",
    tags: ["Data Analysis", "Frontend Development"],
    description: "A tool for visualizing and analyzing telecommunication network performance metrics, with interactive charts and anomaly detection features.",
    link: "#",
    image: "/projects/analyzer.png",
  },
  {
    id: "04",
    title: "IoT Sensor Platform",
    tags: ["IoT", "Real-time Data"],
    description: "A platform for collecting and displaying real-time data from IoT sensors, with live graphs, alert systems, and historical data export.",
    link: "#",
    image: "/projects/iot.png",
  },
  {
    id: "05",
    title: "GIS Web App – Campus Mapping",
    tags: ["WebGIS", "Project Management"],
    description: "An interactive campus map application that allows students to explore facilities, rooms, and real-time occupancy using spatial data.",
    link: "#",
    image: "/projects/campus.png",
  },
  {
    id: "06",
    title: "Machine Learning Pipeline",
    tags: ["Machine Learning", "Data Engineering"],
    description: "A modular ML pipeline for signal classification in telecom networks, trained on sensor data with automated preprocessing and model evaluation.",
    link: "#",
    image: "/projects/ml.png",
  },
];

export default function ProjectsPage() {
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
          FEATURED PROJECTS
        </motion.p>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-black leading-none mb-6"
          >
            FEATURED
            <br />
            <span className="text-[#90ff4f]">PROJECTS</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-500 text-sm max-w-lg mb-10"
        >
          Explore my portfolio of innovative digital experiences, from concept to execution
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-block border border-gray-800 px-8 py-4 rounded-xl"
        >
          <span className="text-6xl font-black text-[#90ff4f]">{allProjects.length}</span>
          <span className="block text-[10px] tracking-widest text-gray-500 font-black mt-1">PROJECTS</span>
        </motion.div>
      </section>

      {/* ── PROJECT LIST (alternating layout) ── */}
      <section className="px-6 md:px-20 max-w-7xl mx-auto pb-32 space-y-32">
        {allProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
          >
            {/* Image */}
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="w-full aspect-video bg-gray-900 rounded-2xl overflow-hidden relative border border-gray-800 group-hover:border-[#90ff4f]/50 transition-all duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl font-black text-white/5">{project.id}</span>
                </div>
              </div>
            </a>

            {/* Content */}
            <div>
              <span className="text-xs text-gray-600 font-black">/ {project.id}</span>
              <div className="flex flex-wrap gap-2 mt-3 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] tracking-widest text-gray-500 font-black border border-gray-700 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 className="text-4xl md:text-5xl font-black leading-tight mb-4">{project.title}</h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">{project.description}</p>
              <a
                href={project.link}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black tracking-widest border border-gray-700 px-6 py-3 rounded-md hover:border-[#90ff4f] hover:text-[#90ff4f] transition-all duration-300"
              >
                GET TO KNOW PROJECT
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </motion.div>
        ))}
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#90ff4f] text-black py-24 px-6 text-center">
        <RevealOnScroll>
          <p className="text-2xl mb-4">👻</p>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            LET'S CREATE SOMETHING
            <br />
            EXTRAORDINARY
          </h2>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-black text-white font-black tracking-widest text-xs hover:bg-gray-900 transition-all duration-300 rounded-md"
          >
            GET STARTED NOW →
          </Link>
        </RevealOnScroll>
      </section>

    </main>
  );
}