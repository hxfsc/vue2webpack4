const merge = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
	mode: "development",
	devtool: "source-map",
	devServer: {
        port: 8001,
        hot: true,
		historyApiFallback: true,
		overlay: {
			warnings: true,
			errors: true
		}
	}
});
