/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      roboto: ["roboto", "sans-serif"],
      oswald: ["oswald", "sans-serif"],
      caladea: ["caladea", "sans-serif"],
      carme: ["carme", "sans-serif"],
      sourceSansPro: ["source-sans-pro", "sans-serif"],
      poppins: ["poppins", "sans-serif"],
      montserrat: ["montserrat", "sans-serif"],
    },
    colors: {
      ...colors,
      primary: {
        ...colors.purple,
        DEFAULT: "var(--color-primary)",
      },
      primary1: {
        ...colors.purple,
        DEFAULT: "var(--color-primary1)",
      },
      primary2: {
        ...colors.purple,
        DEFAULT: "var(--color-primary2)",
      },
      secondary: {
        ...colors.stone,
        DEFAULT: "var(--color-secondary)",
      },
      secondary2: {
        ...colors.stone,
        DEFAULT: "var(--color-secondary2)",
      },
      secondary3: {
        ...colors.stone,
        DEFAULT: "var(--color-secondary3)",
      },
      neutral: {
        ...colors.neutral,
        DEFAULT: "var(--color-neutral)",
      },
      neutral2: {
        ...colors.neutral,
        DEFAULT: "var(--color-neutral2)",
      },
    },
    extend: {
      animation: {
        fadeOut: "fadeOut 1s ease-in-out",
        fadeOutLeft: "fadeOutLeft 1s ease-in-out",
        fadeOutRight: "fadeOutRight 1s ease-in-out",
        fadeOutTop: "fadeOutTop 1s ease-in-out",
        fadeOutBottom: "fadeOutBottom 1s ease-in-out",
        tada: "tada 1s ease-in-out",
        wiggle: "wiggle 2s linear infinite",
      },
      keyframes: (theme) => ({
        fadeOut: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOutLeft: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeOutRight: {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        fadeOutTop: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        fadeOutBottom: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        tada: {
          "0%": { transform: "scale(1)" },
          "10%": { transform: "scale(0.9) rotate(-3deg)" },
          "20%": { transform: "scale(0.9) rotate(-3deg)" },
          "30%": { transform: "scale(1.1) rotate(3deg)" },
          "50%": { transform: "scale(1.1) rotate(3deg)" },
          "70%": { transform: "scale(1.1) rotate(3deg)" },
          "90%": { transform: "scale(1.1) rotate(3deg)" },
          "40%": { transform: "scale(1.1) rotate(-3deg)" },
          "60%": { transform: "scale(1.1) rotate(-3deg)" },
          "80%": { transform: "scale(1.1) rotate(-3deg)" },
          "100%": { transform: "scale(1) rotate(0)" },
        },
        wiggle: {
          "0%": { transform: "rotateZ(0)" },
          "7%": { transform: "rotateZ(0)" },
          "15%": { transform: "rotateZ(-10deg)" },
          "20%": { transform: "rotateZ(8deg)" },
          "25%": { transform: "rotateZ(-8deg)" },
          "30%": { transform: "rotateZ(6deg)" },
          "35%": { transform: "rotateZ(-4deg)" },
          "40%": { transform: "rotateZ(0deg)" },
          "100%": { transform: "rotateZ(0deg)" },
        },
      }),
    },
  },
  plugins: [require("flowbite/plugin")],
};
