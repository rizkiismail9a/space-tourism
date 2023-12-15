/** @type {import('tailwindcss').Config} */
export default {
  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./app.vue", "./error.vue"],
  theme: {
    extend: {
      colors: {
        "main-black": "#0B0D17",
        "main-purple": "#D0D6F9",
      },
    },
    fontFamily: {
      Bellefair: ["Bellefair, serif"],
      BarlowCond: ["Barlow Condensed, sans-serif"],
      Barlow: ["Barlow, sans-serif"],
    },
  },
  plugins: [],
};
