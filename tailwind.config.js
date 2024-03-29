module.exports = {
  // doc: https://tailwindcss.com/docs/just-in-time-mode
  mode: 'jit',
  // doc: https://tailwindcss.com/docs/controlling-file-size
  purge: {
    content: ["./index.html","./src/**/*.tsx", "./src/**/*.ts", "./src/**/*.js"]
  },
  theme: {
    extend: {
      colors: {
        container: {
          plastics: "#FADC00",
          paper: "#1478FA",
          textile: "#DC78C8",
          oils_edible: "#FA3C50",
          glass_mixed: "#14BE78",
          glass_white: "#D5D5D5",
          metals: "#78B4DC"
        }
      },
    },
  },
  variants: {},
  plugins: []
};
