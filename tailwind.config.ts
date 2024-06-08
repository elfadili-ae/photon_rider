import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0px 5px rgba(255,255, 255, 0.35)",
          "0 0px 10px rgba(255, 255,255, 0.2)"
        ]
      }
    },
  },
  plugins: [],
};
export default config;
