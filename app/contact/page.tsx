"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const faqs = [
  { q: "Do you work with clients worldwide?", a: "Yes, I work with clients from all around the world. Thanks to modern communication tools, I can collaborate effectively regardless of time zones." },
  { q: "What's your typical project turnaround time?", a: "Project timelines vary depending on complexity. A simple landing page might take 1-2 weeks, while a full website with custom features could take 4-8 weeks. I'll provide a detailed timeline upfront." },
  { q: "How do I get started with you?", a: "Simply fill out the contact form or send me an email. We'll schedule a call to discuss your project requirements, goals, and timeline. From there I'll provide a proposal." },
  { q: "Do you work with startups or only big brands?", a: "I work with both! Whether you're a startup with a fresh idea or an established brand looking to revamp, every project receives the same level of dedication and quality." },
  { q: "Can you design and develop my website?", a: "Absolutely! I offer both design and development services. I can handle the entire process from initial concept and design to final development and deployment." },
  { q: "Do you offer support after the project is completed?", a: "Yes! I provide post-launch support to ensure everything runs smoothly. This includes bug fixes, minor adjustments, and guidance on how to maintain your site." },
  { q: "What tools do you use?", a: "I use React, Next.js, TypeScript, Tailwind CSS, and Framer Motion. For geospatial work I use Leaflet.js, QGIS, and PostGIS. For design I work with Figma." },
  { q: "Do you provide content or just design?", a: "While I primarily focus on design and development, I can collaborate with copywriters or work with content you provide. I can also recommend trusted professionals in my network." },
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
    <main className="bg-[#050505] text-white min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-40 pb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-xs tracking-widest text-gray-500 font-black mb-6"
        >
          Let's Work Together
        </motion.p>

        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl font-black leading-[0.9]"
          >
            Open To{" "}
            <span className="text-[#90ff4f]">:)</span>
            <br />
            Collaboration
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-400 text-sm max-w-xl leading-relaxed"
        >
          I'm currently a student exploring opportunities in web development, WebGIS, and data engineering.
          If you have any projects, internships, or collaboration ideas, I'd love to connect.
        </motion.p>
      </section>

      {/* ── FORM + INFO (putih) ── */}
      <section className="bg-white text-black py-28 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[150vw] md:w-[120vw] h-[200px] md:h-[300px] bg-[#050505] rounded-[100%] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          {/* Contact info + form */}
          <RevealOnScroll>
            <h2 className="text-3xl font-black mb-10">Send Message</h2>

            {/* Contact details */}
            <div className="space-y-6 mb-10">
              <div>
                <div className="text-[10px] font-black tracking-widest text-gray-400 mb-1">EMAIL</div>
                <a href="mailto:badarbaradja112@gmail.com" className="text-base font-black hover:text-[#90ff4f] transition-colors">
                  badarbaradja112@gmail.com
                </a>
              </div>
              <div>
                <div className="text-[10px] font-black tracking-widest text-gray-400 mb-1">LOCATION</div>
                <div className="text-base font-black">Bandung, Indonesia</div>
              </div>
            </div>

            {/* Form */}
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[#90ff4f] text-black px-8 py-10 rounded-xl"
              >
                <div className="text-3xl font-black mb-2">✓ Message sent!</div>
                <p className="text-sm font-medium">Thank you! I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[10px] font-black tracking-widest text-gray-400 block mb-2">NAME</label>
                  <input
                    type="text" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-3 text-sm font-medium bg-transparent transition-colors duration-200 placeholder:text-gray-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black tracking-widest text-gray-400 block mb-2">EMAIL</label>
                  <input
                    type="email" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-3 text-sm font-medium bg-transparent transition-colors duration-200 placeholder:text-gray-300"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-black tracking-widest text-gray-400 block mb-2">MESSAGE</label>
                  <textarea
                    required rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full border-b-2 border-gray-200 focus:border-black outline-none py-3 text-sm font-medium bg-transparent transition-colors duration-200 resize-none placeholder:text-gray-300"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 bg-black text-white font-black tracking-widest text-xs hover:bg-[#90ff4f] hover:text-black transition-all duration-300 rounded-md"
                >
                  SEND MESSAGE →
                </button>
              </form>
            )}
          </RevealOnScroll>

          {/* Right: socials + extra info */}
          <RevealOnScroll delay={0.15}>
            <h2 className="text-3xl font-black mb-10">Find Me On</h2>
            <div className="space-y-4">
              {[
                { label: "LINKEDIN", href: "https://linkedin.com/in/badar-baradja-5b1bb820a/" },
                { label: "GITHUB", href: "https://github.com" },
                { label: "INSTAGRAM", href: "https://instagram.com" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-between py-4 border-b border-gray-100 group hover:border-black transition-colors duration-200"
                >
                  <span className="text-sm font-black group-hover:text-[#90ff4f] transition-colors duration-200"
                    style={{ color: "inherit" }}>
                    {social.label}
                  </span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200">
                    <line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" />
                  </svg>
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── FAQ (hitam) ── */}
      <section className="bg-[#050505] text-white py-32 px-6 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[50%] w-[150vw] md:w-[120vw] h-[200px] md:h-[300px] bg-white rounded-[100%] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <RevealOnScroll className="mb-16">
            <h2 className="text-5xl md:text-7xl font-black">
              FAQ<span className="text-[#90ff4f]">'S</span>
            </h2>
          </RevealOnScroll>

          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-gray-800"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left py-6 flex justify-between items-center gap-4 hover:text-[#90ff4f] transition-colors duration-200 group"
                >
                  <span className="font-black text-base md:text-lg">{faq.q}</span>
                  <motion.span
                    animate={{ rotate: openFaq === i ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="text-2xl font-light shrink-0 text-[#90ff4f]"
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
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
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