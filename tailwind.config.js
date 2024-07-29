/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        darkBlue: "#000000",
        darkerBlue: "#1e40aa",
      },
      backgroundImage: {
        "bluish-dark-gradient":
          "linear-gradient(60deg, #000 0%, #151b54 45%, #29465b 100%)",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "25%": { transform: "translateX(-75%)" },
          "50%": { transform: "translateX(-50%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        getRight: {
          "0%": { opacity: "0", transform: "translateY(-100%)" },
          "25%": { transform: "translateY(-75%)" },
          "50%": { transform: "translateY(-50%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 1s ease-in",
        getRight: "getRight 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
