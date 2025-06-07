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
        primary: "#7C5E26",
        background: "#FDFDF1",
        secondary: "#CCA868",
        secondary2: "#E2D097",
        black: "#1F1B15",
        white: "#FFFFFF",
      },
      fontFamily: {
        sans: ["modam", "var(--font-sans)"],
        mono: ["modam", "var(--font-mono)"],
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};

module.exports = config;
