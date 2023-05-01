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
        "java-green": {
          50: "#f1fcfb",
          100: "#cff8f4",
          200: "#9ff0ea",
          300: "#67e1dd",
          400: "#37cac9",
          500: "#22c1c3",
          600: "#15888c",
          700: "#156c70",
          800: "#165559",
          900: "#17474a",
          950: "#07282c",
        },
        error: "#b71e1e",
        success: "#71A104",
      },
      gridTemplateColumns: {
        "auto-280": "repeat(auto-fill,minmax(280px,1fr))",
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
