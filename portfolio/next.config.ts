import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // <--- Fondamentale per Altervista
  images: {
    unoptimized: true, // <--- Necessario per l'export statico
  },
};

export default nextConfig;
