/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#f57005",
        yellow: "#FFC224",
        blue: "#0052CC",
        lightWhite: "rgba(255, 255, 255, 0.70)",
        dark: "#0C1D37",
        gray: "#757575",
        darkGray: "rgba(42, 37, 77, 0.70)",
        darkLight: "#E6EAEF",
      },
      boxShadow: {
        xs: "0px 0px 10px 0px rgba(0,0,0,0.20)",
        custom: "0px 0px 34px 0px rgba(0, 0, 0, 0.20)",
        customMd: "0px 16px 48px rgba(39, 39, 39, 0.1)",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [],
};
