import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        scroll: 'scroll 45s linear infinite',
        scrollReverse: 'scrollReverse 38s linear infinite',
      },

      fontFamily: {
        'adventPro': ['var(--font-adventPro)'],
      },
      height: {
        'screen-minus-header': 'calc(100vh - 88px)',
      },

      colors: {
        "mason-transparency-layer": "rgba(0, 0, 0, 0.65)",
        "mason-black": '#0F0F0F',
        "mason-purple": 'rgba(127, 92, 226, 0.8)',
        "mason-grey": "#6C6D71",
        "mason-grey-light": "rgba(108, 109, 113, 0.3)",
        "mason-placeholder": 'rgba(15, 15, 15, 0.2)',
        "mason-form-placeholder": 'rgba(255, 255, 255, 0.2)',
        "mason-border-grey": "rgba(15, 15, 15, 0.05)",
        "mason-border": "#EAEAEA",
        "mason-error": "rgba(216, 35, 29, 1)",
        "mason-tert-text": "#6C6D71",
        "mason-red": "#D8231D",
        "mason-stroke": "292D32",
        "mason-icon-bg": "rgba(216, 35, 29, 0.1)",
        "mason-border-transparent": "rgba(217, 217, 217, 0.5)",
        "mason-badge-bg": "rgba(0, 183, 63, 0.1)",
        "mason-badge-txt": "#00B73F",
      },
    },
  },
  plugins: [],
} satisfies Config;

