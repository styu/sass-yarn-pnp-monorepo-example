/** @type {import('postcss-load-config').Config} */

const legacyPnpImporter = require("pnp-sass-importer/legacy").default;

module.exports = {
  syntax: require("postcss-scss"),
  plugins: [
    require("@csstools/postcss-sass")({
      importer: legacyPnpImporter(__dirname),
    }),
  ],
};
