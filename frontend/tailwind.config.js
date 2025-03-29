import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary branding colors
        primary: {
          DEFAULT: "#0A66C2", // SkillSwap Blue - for trust & professionalism
        },
        // Secondary & accent colors
        accent: {
          DEFAULT: "#fba210", // Warm orange/yellow for CTAs and highlights
        },
        success: {
          DEFAULT: "#7FC15E", // Soft green for success messages & completed exchanges
        },
        error: {
          DEFAULT: "#CC1016", // Soft red for errors & warnings
        },
        // Text colors
        neutral: {
          DEFAULT: "#333333", // Dark gray for text and icons
          light: "#5E5E5E", // Secondary text color
        },
      },
      // You can add font configuration here if needed
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      {
        skillswap: {
          primary: "#0A66C2", // Blue - trust, professionalism
          secondary: "#FFFFFF", // White - clean, minimalist
          accent: "#fba210", // Warm orange/yellow for CTAs
          neutral: "#333333", // Dark gray for text
          "base-100": "#FFFFFF", // White background
          info: "#5E5E5E", // Dark gray for secondary text
          success: "#7FC15E", // Soft green for success messages
          warning: "#F5C75D", // Yellow for warnings
          error: "#CC1016", // Soft red for errors
        },
      },
    ],
  },
};