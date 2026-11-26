// GitHub Pages alt yolu (ör. /neurodiversity) arka plan görsellerine eklenir.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media",
  theme: {
    backgroundImage: {
      join: `url('${basePath}/backgrounds/join.svg')`,
      "join-mobile": `url('${basePath}/backgrounds/join-mobile.svg')`,
      "top-bar": `url('${basePath}/backgrounds/top-border.svg')`,
      discord: `url('${basePath}/backgrounds/discord.svg')`,
    },
    extend: {
      colors: {
        "primary-light": "#860091",
        "primary-dark": "#9a00a8",
        "secondary-light": "#FFEEE5",
        "secondary-dark": "#1a1817",
        "button-primary-light": "#860091",
        "button-primary-dark": "#9a00a8",
        "button-secondary-light": "#e9d0c3",
        "button-secondary-dark": "#e9d0c3",
        "highlight-light": "rgba(194, 65, 25, 0.2)",
        "highlight-dark": "rgba(194, 65, 25, 0.2)",
        "card-light": "white",
        "card-dark": "#2b2927",
        "divider-light": "black",
        "divider-dark": "#5d5d5d",
        "background-light": "#FFEEE5",
        "background-dark": "#181411",
        "text-light": "black",
        "text-dark": "white",
        "text-body-light": "#191919",
        "text-body-dark": "#c1c1c1",
      },
    },
  },
  plugins: [],
};
