import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "eafa-green": "#02732f",
        "eafa-red": "#ff0000",
      },
      boxShadow: {
        "slide-before": "inset 0 0 0 0 green-600",
        "slide-after": "inset 500px 0 0 0 white",
      }
    },
  },
  plugins: [],
};
export default config;
