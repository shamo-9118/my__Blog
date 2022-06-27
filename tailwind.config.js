module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screen: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
    },
    extend: {
      fontFamily: {
        Arial: "Arial Rounded MT Bold",
        Avenir: "Avenir",
        Tsukushiba: "築柴B丸ゴシック",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
