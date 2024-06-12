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
      dropShadow: {
        glow: [
          "0 0px 15px rgba(255,255, 255, 0.3)",
          "0 0px 5px rgba(234, 179,8, .6)"
        ],
      },
      animation: {
        pulse: "pulse 2s infinite",
        blink: "blink 6s infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: 0.6 },
          "25%": { opacity: 0.025 },
          "75%": { opacity: 0.1 },
          "50%": { opacity: 0.3 },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
