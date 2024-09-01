const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const PnpWebpackPlugin = require("pnp-webpack-plugin");

const production = process.env.NODE_ENV === "production";

module.exports = {
  entry: {
    main: [path.join(__dirname, "./src/main.tsx")],
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".scss"],
    plugins: [PnpWebpackPlugin],
  },
  mode: production ? "production" : "development",
  devtool: "inline-cheap-module-source-map",
  devServer: {
    port: 8080,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          configFile: path.join(__dirname, "tsconfig.json"),
        },
      },

      // All files with a '.scss' extension will be handled by 'postcss-loader'
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve("css-loader"),
            options: {
              modules: false,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: require.resolve("css-loader"),
            options: {
              modules: true,
            },
          },
          {
            loader: require.resolve("postcss-loader"),
          },
        ],
      },
      // All font files will be handled by 'file-loader'
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: production ? "[name].[contenthash].css" : "[name].css",
      chunkFilename: production ? "[name].[contenthash].css" : "[name].css",
    }),
  ],
};
