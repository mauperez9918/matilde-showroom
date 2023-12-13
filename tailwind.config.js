/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      "bodoni": ["Bodoni Moda"],
      "workSans": ["Work Sans"],
      sans: ['"Ruda"', defaultTheme.fontFamily.sans],
    },
    extend: {},
  },
  plugins: [],
};
