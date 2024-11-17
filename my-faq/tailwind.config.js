/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors : {
      White : 'hsl(0, 0%, 100%)',
      light_pink : 'hsl(275, 100%, 97%)',
      Grayish_purple : 'hsl(292, 16%, 49%)',
      dark_purple : 'hsl(292, 42%, 14%)',
    },
    extend: {},
  },
  plugins: [],
}