// tailwind.config.js

// const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class", // This should be fine, assuming you're adding/removing 'dark' class manually
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--primary))",
        secondary: "rgb(var(--secondary))",
        accent: "rgb(var(--accent))",
        bg: "rgb(var(--bg))",
        bgCard: "rgb(var(--bg-card))",
        border: "rgb(var(--border))",
        text: "rgb(var(--text))",
        placeholder: "rgb(var(--placeholder))",
        hover: "rgb(var(--hover))",
        focus: "rgb(var(--focus))",
        shadow: "rgb(var(--shadow))",
      },
    },
  },
  plugins: [],
};
