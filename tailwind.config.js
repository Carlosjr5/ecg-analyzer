/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        onest: ["Onest", "serif"],
        // Secondary Font for Body
        inter: ["Inter", "serif"],
      },
      backgroundImage: {
        "dashed-line-svg": "url('./src/images/dashed-line.svg')",
      },
      colors: {
        // Using specific hex values
        "primary-100": "#E6F1F4",
        "primary-200": "#3B6875",
        secondary: "#E15A85",
        "green-accent": "#D3F7E5",
        "green-accent-dark": "#347B57",
        "pink-accent": "#F7D3D4",
        "pink-accent-dark": "#7B3435",
        "yellow-accent": "#F7F5D3",
        "yellow-accent-dark": "#7B7434",
      },
    },
  },
  plugins: [],
};
