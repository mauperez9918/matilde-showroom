/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      bodoni: ["Bodoni Moda"],
      brygada: ["Brygada 1918"],
      workSans: ["Work Sans"],
      sans: ['"Ruda"', defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        "ms-background": "#F2F2F2",
        "ms-footer": "  #11040B",
        "ms-textFooter": "#F8F8F8",
        "ms-brown": "#AD918F",
        "ms-brown-light": "#F3EFEE",
        "ms-blue": "#586D85",
        "ms-blue-light": "#E3F2FC",
        "ms-green": "#588583",
        "ms-green-light": "#C2D2D2",
        "ms-creme": "#DABEB0",
        "ms-creme-light": "#F9F5F3",
      },
    },
  },
  plugins: [],
};
