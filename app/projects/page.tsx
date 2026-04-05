"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Custom easing for premium fluid feel
const fluidEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
    <main className="bg-[#050505] text-white min-h-screen selection:bg-[#90ff4f] selection:text-black">

      {/* ── HERO (Animasi On-Load) ── */}
      <section className="pt-40 pb-20 md:pb-32 px-6 md:px-12 border-b border-gray-900">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: fluidEase }}
            className="flex items-center gap-4 mb-8 md:mb-12"
          >
            <div className="w-2 h-2 bg-[#90ff4f] rounded-full" />
            <p className="text-xs tracking-[0.3em] text-gray-400 font-black">
              INDEX
            </p>
          </motion.div>

          <div className="overflow-hidden mb-10 md:mb-16">
            <motion.h1
              initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.1, ease: fluidEase }}
              className="text-[14vw] md:text-[8vw] lg:text-[7rem] xl:text-[9rem] font-black uppercase leading-[0.85] tracking-tighter"
            >
              SELECTED <br />
              <span className="text-[#90ff4f]">WORKS.</span>
            </motion.h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.p
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.2, ease: fluidEase }}
              className="text-gray-400 text-sm md:text-base max-w-xl leading-relaxed uppercase tracking-widest font-medium"
            >
              A CURATED SELECTION OF MY RECENT PROJECTS, RANGING FROM GEOSPATIAL MAPPING TO DATA AUTOMATION.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: fluidEase }}
              className="flex items-center gap-4 text-right"
            >
              <span className="text-6xl md:text-7xl font-black text-gray-800">{allProjects.length}</span>
              <span className="text-[10px] tracking-widest text-gray-500 font-black text-left leading-tight">TOTAL<br/>PROJECTS</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── ZIG-ZAG BRUTALIST PROJECT LIST ── */}
      <section className="bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
          <div className="flex flex-col">
            {allProjects.map((project, index) => {
              // Penentu posisi zigzag (genap = Kiri Teks Kanan Gambar, ganjil sebaliknya)
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 80, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 1.2, ease: fluidEase }}
                  className="group border-b border-gray-900 py-16 md:py-24 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center"
                >
                  
                  {/* BLOK GAMBAR */}
                  <div className={isEven ? "lg:order-2" : "lg:order-1"}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full overflow-hidden rounded-xl bg-gray-900 aspect-[4/3] md:aspect-video lg:aspect-[4/3]">
                      <div className="w-full h-full transform transition-transform duration-[1.5s] ease-[0.22,1,0.36,1]">
                        <motion.img
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 1.5, ease: fluidEase }}
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                        />
                        {/* Placeholder teks jika gambar tidak ada */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10 text-gray-700 text-xs font-black tracking-widest uppercase">
                          {project.image}
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* BLOK KONTEN */}
                  <div className={`flex flex-col justify-center ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    
                    {/* Header: Angka Raksasa & Tags */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 lg:mb-12">
                      <div className="text-6xl md:text-8xl font-black leading-none text-gray-800 group-hover:text-white transition-colors duration-500">
                        {project.id}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[10px] tracking-widest text-gray-400 font-black border border-gray-800 group-hover:border-[#90ff4f]/50 px-3 py-1 rounded-full uppercase transition-colors duration-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Judul Project */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-8 group-hover:text-[#90ff4f] transition-colors duration-500">
                      {project.title}
                    </h2>

                    {/* Deskripsi & Tombol Aksi */}
                    <div className="flex flex-col gap-8">
                      <p className="text-gray-500 text-sm md:text-base leading-relaxed tracking-wide uppercase">
                        {project.description}
                      </p>
                      <a
                        href={project.link}
                        target="_blank" rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 group/btn w-fit mt-4"
                      >
                        <span className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center group-hover/btn:bg-[#90ff4f] group-hover/btn:border-[#90ff4f] transition-all duration-300 shrink-0">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-white group-hover/btn:text-black group-hover/btn:-rotate-45 transition-all duration-300">
                            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                        <span className="text-xs font-black tracking-widest text-white group-hover/btn:text-[#90ff4f] uppercase transition-colors duration-300">
                          VIEW CASE STUDY
                        </span>
                      </a>
                    </div>
                    
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BRUTALIST CTA ── */}
      <section className="bg-[#90ff4f] text-black py-32 px-6 md:px-12 border-t border-gray-900">
        <div className="max-w-[1400px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 60, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 1.2, ease: fluidEase }}
            className="flex flex-col items-center"
          >
            <p className="text-[10px] tracking-[0.3em] font-black text-black/60 mb-8 uppercase border border-black/20 px-4 py-2 rounded-full">
              HAVE A PROJECT IN MIND?
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-[8rem] font-black mb-12 leading-[0.85] tracking-tighter uppercase">
              LET'S CREATE <br />
              <span className="text-white drop-shadow-md">EXTRAORDINARY</span>
            </h2>
            <Link
              href="/contact"
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-black text-white font-black tracking-widest text-xs uppercase overflow-hidden rounded-full"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">START A CONVERSATION</span>
              <div className="absolute inset-0 h-full w-full bg-white scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 ease-[0.22,1,0.36,1]"></div>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}