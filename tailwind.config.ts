import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warna latar belakang dan teks dasar
        background: "#111111", // Hitam pekat modern
        foreground: "#ededed", // Putih tulang agar tidak silau
        // Warna aksen (bisa kamu ganti sesuai selera, misal 'sky' atau 'violet')
        accent: {
          DEFAULT: "#10b981", // Emerald-500
          hover: "#059669",  // Emerald-600
        },
        // Warna untuk card/konten sekunder
        card: "#1a1a1a",
        border: "#2a2a2a",
      },
    },
  },
  plugins: [],
};
export default config;