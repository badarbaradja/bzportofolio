"use client";

import { motion, Variants, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";
import Link from "next/link";

export default function HeroSection() {
  // ✅ handle window size (biar aman dari SSR error)
  const [viewport, setViewport] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    setViewport({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // ✅ smoothing
  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // ✅ parallax transform (AMAN dari undefined window)
  const moveX = useTransform(smoothX, [0, viewport.width], [-25, 25]);
  const moveY = useTransform(smoothY, [0, viewport.height], [-25, 25]);

  // ✅ animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      y: "120%",
      opacity: 0,
      scale: 1.1,
      filter: "blur(10px)",
    },
    visible: {
      y: "0%",
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-[#050505]">

      {/* 🔥 PARALLAX BACKGROUND */}
      <motion.div style={{ x: moveX, y: moveY }} className="absolute inset-0">
        <ParticleBackground />
      </motion.div>

      {/* CONTENT */}
      <div className="flex flex-col items-center justify-center w-full px-4 text-center z-10">

        {/* TITLE */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="font-black uppercase tracking-tighter"
        >
          {/* BUILDING */}
          <div className="overflow-hidden">
            <motion.span
              variants={wordVariants}
              className="block text-white text-[8vw] sm:text-5xl md:text-7xl leading-tight"
            >
              CONNECTING
            </motion.span>
          </div>

          {/* DATA */}
          <div className="overflow-hidden">
            <motion.span
              variants={wordVariants}
              className="block text-[#90ff4f] text-[11vw] sm:text-6xl md:text-[9rem] leading-[0.88] hover:drop-shadow-[0_0_25px_rgba(144,255,79,0.6)] transition-all duration-500"
            >
              IDEAS INTO
            </motion.span>
          </div>

          {/* SOLUTIONS */}
          <div className="overflow-hidden">
            <motion.span
              variants={wordVariants}
              className="block text-[#90ff4f] text-[11vw] sm:text-6xl md:text-[9rem] leading-[0.88] hover:drop-shadow-[0_0_25px_rgba(144,255,79,0.6)] transition-all duration-500"
            >
              EXPERIENCES
            </motion.span>
          </div>
        </motion.h1>

        {/* FLOATING EFFECT */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-white text-sm md:text-base max-w-xl mx-auto font-semibold leading-relaxed"
        >
          Telecommunication Engineering student with a passion for{" "}
          <span className="bg-[#90ff4f] text-black px-1 rounded-sm">frontend development,</span>{" "}
          focused on building modern, smooth, and engaging{" "}
          <span className="bg-[#90ff4f] text-black px-1 rounded-sm">web experiences.</span>
        </motion.p>

        {/* BUTTONS */}
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

      {/* SCROLL INDICATOR */}
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
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="12" y1="5" x2="12" y2="19" />
            <polyline points="19 12 12 19 5 12" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}