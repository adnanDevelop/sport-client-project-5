/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "998px",
      xl: "1200px",
    },
    colors: {
      red: "#E31C23",
      gray: "#7A7773",
      "white" : "#fff",
      "black" : "#000",
      "dark-black": "##010203",
      orange: "#ff7849",
      green: "#13ce66",
      "graydark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
    },
    fontFamily: {
      primary: ["Barlow Condensed", "sans-serif"],
      secondary: ["Arsenal", "serif"],
    },
    extend: {},
  },
  plugins: [],
};
