/** @type {import('postcss-load-config').Config} */
const sass = require("sass");

module.exports = {
  syntax: require("postcss-scss"),
  plugins: [
    require("@csstools/postcss-sass")({
      importers: [new sass.NodePackageImporter()],
    }),
    require("postcss-typesafe-css-modules"),
  ],
};
