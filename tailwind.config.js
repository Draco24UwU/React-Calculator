import scrollbar from "tailwind-scrollbar";
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--Primary),<alpha-value>)",
        secondary: "rgba(var(--Secondary),<alpha-value>)",
        tertiary: "rgba(var(--Tertiary),<alpha-value>)",
        darkmode: "rgba(var(--DarkMode),<alpha-value>)",
        darkmodetext: "rgba(var(--DarkModeText),<alpha-value>)",
        darkmodesubtext: "rgba(var(--DarkModeSubText),<alpha-value>)",
        error: "rgba(var(--Error),<alpha-value>)",
        warning: "rgba(var(--Warning),<alpha-value>)",
        links: "rgba(var(--Links),<alpha-value>)",
        scroll: {
          darkmodethumb: "rgba(var(--DarkMode),<alpha-value>)",
          darkmodetrack: "rgba(var(--DarkModeText),<alpha-value>)",
        },
      },
      fontSize: {
        "7xl": ["5rem", "1"],
        "8xl": ["6rem", "1"],
        "9xl": ["7rem", "1"],
      },
    },
  },
  plugins: [scrollbar, daisyui],
  darkMode: "class",
};
