export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        },
        screens: {
          "2xl": "1320px",
        },
      },
      colors: {
        main: "#f5931e",
        base: "#003d29",
        black: "#000000",
        primary: "#1d4ed8",
        secondary: "#9ACD32",
        success: "#10b981",
        info: "#3b82f6",
        danger: "#ef4444",
        white: "#ffffff",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
