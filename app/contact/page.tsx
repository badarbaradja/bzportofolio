"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

// Custom easing for premium fluid feel
const fluidEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ── Reusable reveal (Hanya untuk konten di bawah fold / yang di-scroll) ──
function RevealOnScroll({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

const faqs = [
  { q: "DO YOU WORK WITH CLIENTS WORLDWIDE?", a: "Yes, I work with clients from all around the world. Thanks to modern communication tools, I can collaborate effectively regardless of time zones." },
  { q: "WHAT'S YOUR TYPICAL PROJECT TURNAROUND TIME?", a: "Project timelines vary depending on complexity. A simple landing page might take 1-2 weeks, while a full website with custom features could take 4-8 weeks. I'll provide a detailed timeline upfront." },
  { q: "HOW DO I GET STARTED WITH YOU?", a: "Simply fill out the contact form or send me an email. We'll schedule a call to discuss your project requirements, goals, and timeline. From there I'll provide a proposal." },
  { q: "DO YOU WORK WITH STARTUPS OR ONLY BIG BRANDS?", a: "I work with both! Whether you're a startup with a fresh idea or an established brand looking to revamp, every project receives the same level of dedication and quality." },
  { q: "CAN YOU DESIGN AND DEVELOP MY WEBSITE?", a: "Absolutely! I offer both design and development services. I can handle the entire process from initial concept and design to final development and deployment." },
  { q: "DO YOU OFFER SUPPORT AFTER THE PROJECT IS COMPLETED?", a: "Yes! I provide post-launch support to ensure everything runs smoothly. This includes bug fixes, minor adjustments, and guidance on how to maintain your site." },
  { q: "WHAT TOOLS DO YOU USE?", a: "I use React, Next.js, TypeScript, Tailwind CSS, and Framer Motion. For geospatial work I use Leaflet.js, QGIS, and PostGIS. For design I work with Figma." },
  { q: "DO YOU PROVIDE CONTENT OR JUST DESIGN?", a: "While I primarily focus on design and development, I can collaborate with copywriters or work with content you provide. I can also recommend trusted professionals in my network." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSent(true);
  };

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
            <p className="text-xs tracking-[0.3em] text-gray-400 font-black uppercase">
              Let's Work Together
            </p>
          </motion.div>

          <div className="overflow-hidden mb-10 md:mb-16">
            <motion.h1
              initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
              animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.2, delay: 0.1, ease: fluidEase }}
              className="text-[14vw] md:text-[9vw] lg:text-[8rem] xl:text-[10rem] font-black uppercase leading-[0.85] tracking-tighter"
            >
              OPEN TO <br />
              <span className="text-gray-600">COLLABORATION</span>
              <span className="text-[#90ff4f]">.</span>
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, delay: 0.2, ease: fluidEase }}
            className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed uppercase tracking-widest font-medium"
          >
            I'M CURRENTLY A STUDENT EXPLORING OPPORTUNITIES IN WEB DEVELOPMENT, WEBGIS, AND DATA ENGINEERING. 
            IF YOU HAVE ANY PROJECTS, INTERNSHIPS, OR COLLABORATION IDEAS, I'D LOVE TO CONNECT.
          </motion.p>
        </div>
      </section>

      {/* ── FORM & INFO SECTION (Brutalist Grid) ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-b border-gray-900 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-20 lg:gap-32 items-start">

          {/* Kiri: Contact Info & Socials */}
          <div className="flex flex-col h-full">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase">Contact <br/><span className="text-gray-600">Details</span></h2>

              <div className="space-y-10 mb-16 border-l-2 border-[#90ff4f] pl-6">
                <div>
                  <div className="text-[10px] font-black tracking-[0.2em] text-gray-500 mb-2">EMAIL</div>
                  <a href="mailto:badarbaradja112@gmail.com" className="text-lg md:text-xl font-black hover:text-[#90ff4f] transition-colors duration-300">
                    badarbaradja112@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-[10px] font-black tracking-[0.2em] text-gray-500 mb-2">LOCATION</div>
                  <div className="text-lg md:text-xl font-black uppercase">Bandung, Indonesia</div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.15}>
              <h2 className="text-4xl md:text-5xl font-black mb-10 tracking-tighter uppercase">Socials</h2>
              <div className="flex flex-col w-full border-t border-gray-900">
                {[
                  { label: "LINKEDIN", href: "https://linkedin.com/in/badar-baradja-5b1bb820a/" },
                  { label: "GITHUB", href: "https://github.com" },
                  { label: "INSTAGRAM", href: "https://instagram.com/badarbaradja_" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-between py-6 border-b border-gray-900 group hover:border-[#90ff4f] transition-colors duration-300"
                  >
                    <span className="text-2xl md:text-3xl font-black uppercase tracking-tight group-hover:text-[#90ff4f] transition-colors duration-300">
                      {social.label}
                    </span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 group-hover:text-[#90ff4f] group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300">
                      <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Kanan: Form */}
          <RevealOnScroll delay={0.2} className="bg-[#0a0a0a] border border-gray-900 p-8 md:p-16 rounded-3xl">
            <h2 className="text-4xl md:text-5xl font-black mb-12 tracking-tighter uppercase">Send a <br/><span className="text-[#90ff4f]">Message</span></h2>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#90ff4f] text-black px-8 py-12 rounded-2xl"
              >
                <div className="text-4xl font-black mb-4 uppercase tracking-tighter">MESSAGE RECEIVED.</div>
                <p className="text-sm font-black tracking-widest uppercase">Thank you! I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="relative group/input">
                  <label className="text-[10px] font-black tracking-[0.2em] text-gray-500 block mb-4 group-focus-within/input:text-[#90ff4f] transition-colors duration-300">01 / NAME</label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b border-gray-800 focus:border-[#90ff4f] outline-none pb-4 text-xl md:text-2xl font-black uppercase tracking-tight bg-transparent transition-colors duration-300 placeholder:text-gray-800 placeholder:font-black"
                    placeholder="ENTER YOUR NAME"
                  />
                </div>
                
                <div className="relative group/input">
                  <label className="text-[10px] font-black tracking-[0.2em] text-gray-500 block mb-4 group-focus-within/input:text-[#90ff4f] transition-colors duration-300">02 / EMAIL</label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b border-gray-800 focus:border-[#90ff4f] outline-none pb-4 text-xl md:text-2xl font-black uppercase tracking-tight bg-transparent transition-colors duration-300 placeholder:text-gray-800 placeholder:font-black"
                    placeholder="YOUR@EMAIL.COM"
                  />
                </div>
                
                <div className="relative group/input">
                  <label className="text-[10px] font-black tracking-[0.2em] text-gray-500 block mb-4 group-focus-within/input:text-[#90ff4f] transition-colors duration-300">03 / MESSAGE</label>
                  <textarea
                    required rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-b border-gray-800 focus:border-[#90ff4f] outline-none pb-4 text-xl md:text-2xl font-black uppercase tracking-tight bg-transparent transition-colors duration-300 resize-none placeholder:text-gray-800 placeholder:font-black"
                    placeholder="TELL ME ABOUT YOUR PROJECT..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center px-12 py-6 bg-white text-black font-black tracking-widest text-xs uppercase overflow-hidden rounded-xl mt-8"
                >
                  <span className="relative z-10 group-hover:text-black transition-colors duration-500 flex items-center gap-4">
                    SEND MESSAGE
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">
                      <line x1="5" y1="19" x2="19" y2="5" /><polyline points="9 5 19 5 19 15" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-[#90ff4f] scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100 ease-[0.22,1,0.36,1]"></div>
                </button>
              </form>
            )}
          </RevealOnScroll>

        </div>
      </section>

      {/* ── FAQ SECTION (Editorial Style) ── */}
      <section className="bg-[#050505] py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <RevealOnScroll className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <div className="text-[10px] tracking-[0.3em] font-black text-[#90ff4f] mb-6">/ INQUIRIES</div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
                FAQ<span className="text-gray-700">'S</span>
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-sm tracking-widest uppercase font-black leading-relaxed md:text-right">
              COMMON QUESTIONS ABOUT MY PROCESS, CAPABILITIES, AND HOW WE CAN WORK TOGETHER.
            </p>
          </RevealOnScroll>

          <div className="border-t border-gray-900">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1.2, delay: i * 0.1, ease: fluidEase }}
                className="border-b border-gray-900"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left py-8 md:py-10 flex justify-between items-center gap-8 hover:text-[#90ff4f] transition-colors duration-300 group"
                >
                  <div className="flex gap-6 md:gap-12 items-start">
                    <span className="text-[10px] text-gray-600 font-black tracking-widest mt-2 hidden sm:block">0{i + 1}</span>
                    <span className="font-black text-xl md:text-3xl uppercase tracking-tighter leading-tight group-hover:pl-4 transition-all duration-300">{faq.q}</span>
                  </div>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.5, ease: fluidEase }}
                    className={`text-3xl font-light shrink-0 flex items-center justify-center w-12 h-12 rounded-full border transition-colors duration-300 ${openFaq === i ? "border-[#90ff4f] text-[#90ff4f]" : "border-gray-800 text-gray-500 group-hover:border-[#90ff4f] group-hover:text-[#90ff4f]"}`}
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.6, ease: fluidEase }}
                      className="overflow-hidden"
                    >
                      <div className="pb-10 pl-0 sm:pl-[72px] md:pl-[84px] max-w-3xl">
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed tracking-wide uppercase font-medium">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}