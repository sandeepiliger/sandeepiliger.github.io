/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        neon1: '#0ea5e9',
        neon2: '#8b5cf6',
        bg: '#070617'
      },
      keyframes: {
        'glow': {
          '0%,100%': { opacity: '0.7', transform: 'translateY(0px)' },
          '50%': { opacity: '1', transform: 'translateY(-6px)' }
        },
        'gradient': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' }
        }
      },
      animation: {
        glow: 'glow 3s ease-in-out infinite',
        gradient: 'gradient 8s ease infinite'
      },
    },
  },
  plugins: [],
}