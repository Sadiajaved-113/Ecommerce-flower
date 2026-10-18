/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       fontFamily: {
      serif: ['Fraunces', 'serif'],
    },
    keyframes: {
      floatY: {
        '0%, 100%': { transform: 'translateY(0)' },
        '50%': { transform: 'translateY(-10px)' },
      },
      drift: {
        '0%, 100%': { transform: 'translate(0,0) rotate(0deg)' },
        '50%': { transform: 'translate(-14px, 16px) rotate(18deg)' },
      },
    },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}