// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}", // 念のため追加
    "./app/**/*.{js,ts,jsx,tsx}", // 念のため追加
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};