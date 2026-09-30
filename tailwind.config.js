/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#F4F2EE',
        dark: '#111111',
        stone: {
          light: '#E8E5DF',
        },
        muted: '#6B6862',
      },
      fontFamily: {
        serif: ['Cormorant', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        wider: '0.12em',
        widest: '0.16em',
      }
    },
  },
  plugins: [],
}
