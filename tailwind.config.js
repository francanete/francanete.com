const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: {
          light: "#F9F871",
          dark: "#1e293b",
        },
        secondary: "#334155",
        dark: "#0f172a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
