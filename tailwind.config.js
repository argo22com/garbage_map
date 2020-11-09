module.exports = {
  // doc: https://tailwindcss.com/docs/controlling-file-size
  purge: {
    enabled: process.env.PURGE_CSS === "true",
    content: ["./src/**/*.tsx", "./src/**/*.ts", "./src/**/*.js"]
  },
  future: {
    // doc: https://tailwindcss.com/docs/upcoming-changes#remove-deprecated-gap-utilities
    removeDeprecatedGapUtilities: true,
    // doc: https://tailwindcss.com/docs/upcoming-changes#purge-layers-by-default
    purgeLayersByDefault: true
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
