import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        drift: {
          "0%, 100%": {
            transform: "translate(-50%, -50%)",
          },
          "25%": {
            transform: "translate(calc(-50% + 10px), calc(-50% - 15px))",
          },
          "50%": {
            transform: "translate(calc(-50% - 10px), calc(-50% + 10px))",
          },
          "75%": {
            transform: "translate(calc(-50% + 5px), calc(-50% + 5px))",
          },
        },
        "float-slow": {
          "0%, 100%": {
            transform: "translate(-50%, -50%) translateY(0)",
          },
          "50%": {
            transform: "translate(-50%, -50%) translateY(-20px)",
          },
        },
      },
      animation: {
        drift: "drift ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
