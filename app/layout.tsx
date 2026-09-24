import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Badar Zaki Baradja | Fullstack Web Developer & WebGIS",
  description:
    "Portofolio Badar Zaki Baradja, mahasiswa Telecommunication Engineering Telkom University. Berfokus pada pengembangan Fullstack Web, WebGIS, Next.js, React, integrasi Supabase, dan system automation.",
  keywords: [
    "Badar Zaki Baradja",
    "Telecommunication Engineering",
    "Telkom University",
    "Fullstack Developer",
    "Backend Developer",
    "Frontend Developer",
    "WebGIS Developer",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Supabase",
    "System Automation"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}