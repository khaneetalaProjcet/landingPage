import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#96773E",
        background: "#FDFDF1",
        secondary: "#CCA868",
        secondary2: "#F5E5C4",
        black: "#1F1B15",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["vazir", "var(--font-sans)"],
        mono: ["vazir", "var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
