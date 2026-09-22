import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm, elegant, premium palette — deep evergreen + warm cream + soft brass
        ink: {
          DEFAULT: "#1c2b26",
          soft: "#33463f",
        },
        forest: {
          50: "#f2f6f3",
          100: "#dbe7df",
          200: "#b6cec0",
          300: "#8aae9b",
          400: "#5d8a73",
          500: "#3f6d57",
          600: "#2f5644",
          700: "#274538",
          800: "#21382e",
          900: "#1c2e27",
        },
        brass: {
          50: "#faf6ee",
          100: "#f1e6cf",
          200: "#e3cb9e",
          300: "#d3ac6c",
          400: "#c69349",
          500: "#b57d34",
          600: "#9a642b",
          700: "#7c4d26",
          800: "#673f25",
          900: "#583622",
        },
        cream: {
          DEFAULT: "#faf7f1",
          deep: "#f2ece0",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.22em",
      },
      boxShadow: {
        soft: "0 20px 60px -25px rgba(28, 46, 39, 0.35)",
        card: "0 12px 40px -18px rgba(28, 46, 39, 0.28)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
