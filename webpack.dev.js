const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "source-map",
	//hot: true,
	devServer: {
		port: 8001,
		historyApiFallback: {
			index: "./index.html"
		},
        contentBase: "./dist"
	}
})
