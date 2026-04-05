import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Badar Zaki Baradja | Portfolio",
  description:
    "Telecommunication Engineering student specializing in WebGIS development, system automation, and data-driven solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050505] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}