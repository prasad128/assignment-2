const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        13: "3.3rem",
        15: "3.6rem",
        22: "5.5rem",
      },
      colors: {
        cyan: colors.cyan,
      },
      height: {
        63: "63%",
      },
      transitionDelay: {
        5000: "5000ms",
      },
    },
  },
  variants: {
    extend: {
      scale: ["group-hover"],
      backgroundColor: ["active"],
      borderColor: ["active"],
      textColor: ["motion-safe", "active"],
    },
  },
  plugins: [],
};
