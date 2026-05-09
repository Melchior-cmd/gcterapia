import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f1f9f8",
          100: "#dbeeee",
          500: "#2f8f88",
          700: "#216a65",
          900: "#143d3a"
        }
      }
    }
  },
  plugins: []
};

export default config;
