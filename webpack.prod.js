const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const webpack = require("webpack");

const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "production",
	plugins: [
		new UglifyJSPlugin(
			// {
			// 	compress: {
			// 		warnings: false
			// 	}
			// }
		),

		new webpack.DefinePlugin({
			"process.env.NODE_ENV": JSON.stringify("production")
	    })
	]
});
