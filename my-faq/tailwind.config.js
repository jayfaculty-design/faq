/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      mobile: '375px',
      tablet: '768px',
      lg: '976px',
      laptop1024: '1024px',
      desktop: '1440px',
    },

    colors : {
      White : 'hsl(0, 0%, 100%)',
      light_pink : 'hsl(275, 100%, 97%)',
      Grayish_purple : 'hsl(292, 16%, 49%)',
      dark_purple : 'hsl(292, 42%, 14%)',
    },
    extend: {
      backgroundImage: {
        'background-pattern-mobile': "url('./images/background-pattern-mobile.svg')",
        'background-pattern-desktop': "url('./images/background-pattern-desktop.svg')",
      }
    },
  },
  plugins: [],
}