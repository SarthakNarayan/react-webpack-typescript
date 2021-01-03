const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    // because of this we get
    // 404s will fallback to /index.html
    // this will prevent any problem while using react-router
    historyApiFallback: true,
    // this is for running it on port 3000
    port: 3000,

    // open a tab when you run the file
    open: true,
  },
});
