/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      bodoni: ["Bodoni Moda"],
      workSans: ["Work Sans"],
      sans: ['"Ruda"', defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "ms-background": "#F2F2F2",
        "ms-footer": "  #11040B",
        "ms-textFooter": "#F8F8F8",
        "ms-brown": "#AD918F",
        "ms-blue": "#586D85",
        "ms-green": "#588583",
        "ms-creme": "#DABEB0",
      },
    },
  },
  plugins: [],
};
