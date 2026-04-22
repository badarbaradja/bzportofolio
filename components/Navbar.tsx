"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-50">
        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-tighter text-white cursor-pointer hover:scale-110 transition-transform"
        >
          BZ<span className="text-[#90ff4f]">!</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-white">
          {navLinks.map((link) => (
            link.label === "Contact" ? (
              <Link
                key={link.href}
                href={link.href}
                className="px-6 py-2.5 bg-[#90ff4f] text-black font-bold rounded-md transition-colors cursor-pointer hover:bg-white"
              >
                Contact
              </Link>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-[#90ff4f] transition-colors ${pathname === link.href ? "text-[#90ff4f]" : ""}`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        {/* Hamburger button */}
        <button
          id="hamburger-menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 cursor-pointer z-[60] relative p-2 -mr-2"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block origin-center"
          />
          <motion.span
            animate={isOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-0.5 bg-white block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8, width: "1.5rem" } : { rotate: 0, y: 0, width: "1rem" }}
            transition={{ duration: 0.3 }}
            className="w-4 h-0.5 bg-white block origin-center"
          />
        </button>
      </nav>

      {/* Mobile drawer overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[45] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-72 bg-[#0a0a0a] border-l border-gray-800 z-[55] md:hidden flex flex-col pt-24 px-8 pb-10"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {link.label === "Contact" ? (
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className="block mt-4 px-6 py-3 bg-[#90ff4f] text-black font-bold text-center rounded-md hover:bg-white transition-colors"
                      >
                        Contact
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block py-4 text-xl font-bold border-b border-gray-800 transition-colors ${pathname === link.href ? "text-[#90ff4f]" : "text-white hover:text-[#90ff4f]"
                          }`}
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Footer drawer */}
              <div className="mt-auto text-xs text-gray-600 tracking-widest font-bold">
                BADAR ZAKI BARADJA
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}