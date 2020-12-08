const merge = require("webpack-merge");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const common = require("./webpack.common.js");
const { srcPath } = require("./paths.js");

module.exports = merge(common, {
	mode: "production",
	plugins: [
		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, `${srcPath}/index.html`)
    })
	]
});
