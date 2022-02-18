const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        main: {
          light: "#F9F871",
          dark: "#D4A418",
        },
        dark: "#0f172a",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
