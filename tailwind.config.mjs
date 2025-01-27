/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        "color-change": "color-change 2s infinite",
      },
      keyframes: {
        "color-change": {
          "0%, 100%": { color: "rgb(221, 214, 254, 0.9)" }, // text-violet-200/90
          "25%": { color: "rgb(254, 202, 202, 0.9)" }, // text-red-200/90
          "50%": { color: "rgb(191, 219, 254, 0.9)" }, // text-sky-200/90
          "75%": { color: "rgb(254, 240, 138, 0.9)" }, // text-yellow-200/90
        },
      },
    },
  },
  plugins: [],
};
