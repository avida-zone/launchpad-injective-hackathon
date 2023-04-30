const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}", "./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "kashmir-blue": {
          50: "#f5f6fa",
          100: "#eaecf4",
          200: "#d0d7e7",
          300: "#a7b5d2",
          400: "#778db9",
          500: "#566fa1",
          600: "#435786",
          700: "#37476d",
          800: "#303d5c",
          900: "#2c354e",
          950: "#1d2334",
        },
        "cinnabar-red": {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fdcbcb",
          300: "#fba6a6",
          400: "#f67373",
          500: "#ed4646",
          600: "#da2828",
          700: "#b71e1e",
          800: "#981c1c",
          900: "#7e1e1e",
          950: "#440b0b",
        },
        success: "#71A104",
      },
      fontFamily: {
        barbapro: ["var(--font-barbapro)", ...defaultTheme.fontFamily.sans],
        inter: ["var(--font-inter)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
  variants: {
    scrollbar: ["rounded"],
  },
};
