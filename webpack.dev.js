const merge = require("webpack-merge");
const common = require("./webpack.common.js");


module.exports = merge(common, {
	devtool: "include-source-map",
	devServer: {
		contentBase: "./dist"
	}
})
