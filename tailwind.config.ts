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
        'screen-minus-header': 'calc(100vh - 88px)',
      },
      colors: {
        "mason-black": '#0F0F0F',
        "mason-grey": "#6C6D71",
        "mason-placeholder": 'rgba(15, 15, 15, 0.2)',
        "mason-border-grey": "rgba(15, 15, 15, 0.05)",
        "mason-border": "#EAEAEA",
        "mason-error": "rgba(216, 35, 29, 1)",
        "mason-tert-text": "#6C6D71",
        "mason-red": "#D8231D",
        "mason-stroke": "292D32",
        "mason-icon-bg": "rgba(216, 35, 29, 0.1)",
        "mason-border-transparent": "rgba(217, 217, 217, 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;

