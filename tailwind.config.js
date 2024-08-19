import scrollbar from 'tailwind-scrollbar';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        custom: {
          darkmodethumb: 'var(--DarkMode)',
          darkmodetack: 'var(--DarKModeText)'
        },
      },
    },
  },
  plugins: [
    scrollbar,
    daisyui,
  ],
  darkMode: 'class'
}