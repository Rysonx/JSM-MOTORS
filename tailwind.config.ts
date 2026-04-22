import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'ck-cyan': '#00A89E',
        'ck-red': '#E30613',
      },
    },
  },
  plugins: [],
};
export default config;