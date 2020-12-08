const { distPath } = require("./paths")
const path = require("path")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
const DllPlugin = require("webpack/lib/DllPlugin")
module.exports = merge(common, {
  mode: "development",
  entry: {
    bootinit: ["axios", "moment", "vue", "vue-router", "vuex", "element-ui"]
  },

  output: {
    path: path.join(__dirname, distPath),
    filename: "[name].dll.js",
    library: "__dll__[name]"
  },

  plugins: [
    new DllPlugin({
      name: "__dll__[name]",
      path: path.join(distPath, "[name].manifest.json")
    })
  ]
})
