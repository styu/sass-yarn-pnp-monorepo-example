/** @type {import('postcss-load-config').Config} */
const legacyPnpImporter = require("pnp-sass-importer/legacy").default;

module.exports = {
    syntax: require("postcss-scss"),
    plugins: [
        require("@csstools/postcss-sass")({
            // Note this plugin is still using the LegacyImporter syntax: https://github.com/csstools/postcss-sass/blob/313816e8e9526d7cee3c3660298d89dc6510c298/src/index.mjs#L79
            importer: legacyPnpImporter(__dirname),
        }),
        require("postcss-typesafe-css-modules"),
    ],
};
