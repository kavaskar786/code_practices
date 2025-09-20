/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fff9e6',
          100: '#fff3cc',
          200: '#ffe799',
          300: '#ffdb66',
          400: '#ffcf33',
          500: '#FFD700',
          600: '#e6c200',
          700: '#cc8c00',
          800: '#b37700',
          900: '#996100',
        },
        clan: {
          50: '#e6f3ff',
          100: '#cce7ff',
          200: '#99cfff',
          300: '#66b7ff',
          400: '#339fff',
          500: '#4A90E2',
          600: '#0066cc',
          700: '#004d99',
          800: '#003366',
          900: '#001a33',
        },
        war: {
          50: '#fdecea',
          100: '#fbd9d5',
          200: '#f7b3ab',
          300: '#f38d81',
          400: '#ef6757',
          500: '#E74C3C',
          600: '#d42c1a',
          700: '#a02213',
          800: '#6c170d',
          900: '#380c06',
        },
        dark: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d5d6da',
          300: '#b4b6bc',
          400: '#8a8d96',
          500: '#6c707a',
          600: '#565962',
          700: '#47494f',
          800: '#3d3e43',
          900: '#1a1b1e',
          950: '#0a0a0b',
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          '50%': { boxShadow: '0 0 30px rgba(255, 215, 0, 0.8)' },
        },
      },
    },
  },
  plugins: [],
};