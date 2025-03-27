/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "serif"],
        rubik: ["Rubik", "serif"],
      },
      colors: {
        primaryBackground: "#8A49E1",
        primary: "#FFFFFF",
        primaryDark: "#232734",
        "white-transparent": "rgba(255, 255, 255, 0.5)",
        "dark-transparent": "rgba(0, 0, 0, 0.3)",
        darkText: "#B1B7CD",
        lightText: "#838383",
        lightHeading: "#091542",
        darkHeading: "#FFFFFF",
        sidebarDarkHeader: "#1d222f",
        sidebarDark: "#2c3142",
        "custom-blue-60": "rgba(9, 21, 66, 0.6)",
        "custom-blue-80": "rgba(9, 21, 66, 0.8)",
        "purple-20": "rgba(120, 93, 200, 0.2)",
        "black-500": "rgba(0, 0, 0, 0.5)",
        "black-300": "rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
