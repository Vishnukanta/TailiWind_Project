/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        dark: "#171717",
        main: "#FF304D",
        activeRed: "#DC2D45",
        lightRed: "#FF445E",
        grey: "#323232",
        darkGrey: "#474747",
        middleGrey: "#919191",
        lightGrey: "#E0E0E0",
        light: "#F8F8F8",
        white: "#FFFFFF",
        prototype: "#457292",
        gradient: "#FF304D",
        lineBorder: "#919191",
      },
      screens: {
        mobile: "360px",
        tablet: "820px",
        desktop: "1920px",
      },
    },
  },
  plugins: [],
}
