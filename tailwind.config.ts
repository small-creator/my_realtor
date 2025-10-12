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
        primary: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
          light: '#38bdf8',
        },
        accent: '#38bdf8',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        gray: {
          50: '#f8fafc',
          900: '#0f172a',
        },
      },
      fontFamily: {
        roboto: ['Roboto', 'Arial', 'sans-serif'],
        noto: ['Noto Sans KR', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        soft: '12px',
      },
      boxShadow: {
        soft: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
