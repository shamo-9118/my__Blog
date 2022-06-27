module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: { 
    extend: {fontFamily:{Arial:"Arial Rounded MT Bold"}} },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  
};
