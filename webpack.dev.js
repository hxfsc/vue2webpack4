const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
const { distPath, srcPath } = require("./paths")
const DllReferencePlugin = require("webpack/lib/DllReferencePlugin")

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",

  plugins: [
    new DllReferencePlugin({
      manifest: require(path.resolve(__dirname, `${distPath}/bootinit.manifest.json`))
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `${srcPath}/index.html`)
    })
  ],

  devServer: {
    port: 8001,
    hot: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true
    }
  }
})
