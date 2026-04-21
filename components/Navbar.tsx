"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 w-full px-8 py-6 flex justify-between items-center z-50 mix-blend-difference text-white pointer-events-auto">
      <Link
        href="/"
        className="text-2xl font-black tracking-tighter cursor-pointer hover:scale-110 transition-transform"
      >
        BZ<span className="text-[#90ff4f] mix-blend-normal">!</span>
      </Link>

      <div className="hidden md:flex items-center gap-8 font-medium text-sm">
        <Link
          href="/"
          className={`hover:text-[#90ff4f] transition-colors ${pathname === "/" ? "text-[#90ff4f]" : ""}`}
        >
          Home
        </Link>
        <Link
          href="/about"
          className={`hover:text-[#90ff4f] transition-colors ${pathname === "/about" ? "text-[#90ff4f]" : ""}`}
        >
          About
        </Link>
        <Link
          href="/contact/projects"
          className={`hover:text-[#90ff4f] transition-colors ${pathname === "/projects" ? "text-[#90ff4f]" : ""}`}
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-2.5 bg-[#90ff4f] text-black font-bold rounded-md transition-colors cursor-pointer mix-blend-normal hover:bg-white"
        >
          Contact
        </Link>
      </div>

      {/* Mobile hamburger (optional, simple) */}
      <div className="md:hidden flex flex-col gap-1.5 cursor-pointer pointer-events-auto">
        <span className="w-6 h-0.5 bg-white block"></span>
        <span className="w-6 h-0.5 bg-white block"></span>
        <span className="w-4 h-0.5 bg-white block"></span>
      </div>
    </nav>
  );
}