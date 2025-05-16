/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4169e1',
          light: '#6687e6',
          dark: '#2851db',
        },
        secondary: {
          DEFAULT: '#0a2463',
          light: '#153a8f',
          dark: '#071a45',
        },
        accent: {
          DEFAULT: '#00b4d8',
          light: '#38d6f5',
          dark: '#0089a7',
        },
        cream: '#fff9e6',
        success: {
          DEFAULT: '#34d399',
          light: '#6ee7b7',
          dark: '#10b981',
        },
        warning: {
          DEFAULT: '#fbbf24',
          light: '#fcd34d',
          dark: '#f59e0b',
        },
        error: {
          DEFAULT: '#ef4444',
          light: '#f87171',
          dark: '#dc2626',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/container-queries")
  ],
};