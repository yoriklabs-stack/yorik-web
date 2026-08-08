/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        yorik: {
          bg: '#08090C',
          surface: '#0D0E15',
          'surface-elevated': '#141622',
          border: '#1F2434',
          'border-bright': '#2E364F',
          text: '#F1F5F9',
          muted: '#94A3B8',
          subtle: '#64748B',
          purple: {
            DEFAULT: '#8B5CF6',
            glow: '#A855F7',
            dark: '#6D28D9',
          },
          cyan: {
            DEFAULT: '#06B6D4',
            glow: '#22D3EE',
            dark: '#0891B2',
          },
          blue: {
            DEFAULT: '#3B82F6',
            glow: '#60A5FA',
          },
          pink: '#EC4899',
          green: '#10B981',
          orange: '#F97316',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Plus Jakarta Sans', 'Geist', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 30px -5px rgba(139, 92, 246, 0.25)',
        'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.25)',
        'glow-strong': '0 0 50px 5px rgba(139, 92, 246, 0.35)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 20px 0 rgba(139, 92, 246, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'orbit-clockwise': 'orbit 25s linear infinite',
        'orbit-counter': 'orbit-reverse 35s linear infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        },
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px)",
        'radial-glow': 'radial-gradient(circle at center, rgba(139, 92, 246, 0.18) 0%, rgba(6, 182, 212, 0.08) 45%, transparent 70%)',
        'gradient-dark': 'linear-gradient(to bottom, #08090C, #0D0E15)',
      },
    },
  },
  plugins: [],
};
