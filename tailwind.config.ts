import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#141414",
        "ink-soft": "#262626",
        "ink-muted": "#707070",
        "ink-faint": "#adadad",
        canvas: "#ffffff",
        "canvas-soft": "#f5f5f7",
        "canvas-field": "#f0f0f0",
        hairline: "#e0e0e0",
        "hairline-soft": "#f0f0f0",
        accent: "#0066ff",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      fontSize: {
        'display': ['80px', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-1': ['56px', { lineHeight: '1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'heading-2': ['44px', { lineHeight: '1.13', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-3': ['32px', { lineHeight: '1.13', letterSpacing: '-0.01em', fontWeight: '700' }],
        'heading-4': ['24px', { lineHeight: '1.25', fontWeight: '600' }],
        'title': ['20px', { lineHeight: '1.3', fontWeight: '600' }],
        'body-lg': ['20px', { lineHeight: '1.5', fontWeight: '300' }],
        'body': ['17px', { lineHeight: '1.47', fontWeight: '400' }],
        'body-sm': ['14px', { lineHeight: '1.43', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.33', fontWeight: '400' }],
      },
      spacing: {
        'section': '80px',
        'section-lg': '120px',
      },
      borderRadius: {
        'pill': '9999px',
        'card': '24px',
        'card-sm': '16px',
      },
      maxWidth: {
        'content': '1280px',
        'narrow': '980px',
        'prose': '65ch',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'border-beam': {
          '100%': { offsetDistance: '100%' },
        },
      },
      animation: {
        'marquee': 'marquee var(--duration, 30s) linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
    },
  },
  plugins: [],
};
export default config;
