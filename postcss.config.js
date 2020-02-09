const tailwindcss = require("tailwindcss");
// postcss.config.js
const purgecss = require("@fullhuman/postcss-purgecss")({
  // Specify the paths to all of the template files in your project
  content: [
    "./src/**/*.tsx"
    // etc.
  ],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],

  // ignore Leaflet CSS
  whitelistPatterns: [/^leaflet?/, /^marker?/, /^lvml?/],
  whitelistPatternsChildren: [/^leaflet?/, /^marker?/, /^lvml?/]
});

module.exports = {
  plugins: [
    tailwindcss({
      config: "./tailwind.js"
    }),
    purgecss
  ]
};
