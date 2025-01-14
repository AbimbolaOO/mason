import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'adventPro': ['var(--font-adventPro)'],
      },
      height: {
        // 'web-footer-heigh': 'calc(100vh - 50px)',
      },
      colors: {
        "mason-black": '#0F0F0F',
        "mason-placeholder": 'rgba(15, 15, 15, 0.2)',
        "mason-border-grey": "rgba(15, 15, 15, 0.05)",
        "mason-error": "rgba(216, 35, 29, 1)",
        "mason-tert-text": "#6C6D71"
      },
    },
  },
  plugins: [],
} satisfies Config;

