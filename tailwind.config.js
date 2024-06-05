/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        pulse: "pulse 8s infinite",
        blink: "blink 6s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: .6 },
          "50%": { opacity: 0.1 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
