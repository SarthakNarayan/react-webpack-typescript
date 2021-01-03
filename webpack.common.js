const HtmlPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // entry point
  // change it according to the file like index.jsx for normal react
  entry: "./src/index.tsx",
  output: {
    // to change the output path from dist to build
    path: path.resolve(__dirname, "build"),
    // changing the filename from main.js to bundle.js
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        // this means this rule will apply only to TS and TSX files.
        // this is a regex expression
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
          },
        ],
      },
      {
        // for all the css and scss files
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        // to be able to use images
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },

  /*
   * resolve lets Webpack now in advance what file extensions you plan on
   * "require"ing into the web application, and allows you to drop them
   * in your code.
   */
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  plugins: [
    new HtmlPlugin({
      filename: "index.html",
      template: "./public/index.html",
    }),
  ],
};
