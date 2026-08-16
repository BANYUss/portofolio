import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        background: "#0a0a0a",
        surface: "#111111",
        border: "#1f1f1f",
        "border-light": "#2a2a2a",
        primary: "#f5f5f5",
        secondary: "#a1a1aa",
        muted: "#52525b",
        accent: "#818cf8",
      },
    },
  },
  plugins: [],
};

export default config;
