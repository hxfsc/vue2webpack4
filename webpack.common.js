const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, "src/index.js"),
	output: {
		filename: "bundle.js",
		path: path.join(__dirname, "dist")
	},

	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader'
			},
			{
				test: /\.vue$/,
				loader: "vue-loader"
			},
			{
				test: /\.scss$/,
				use: [
					"vue-style-loader",
					"css-loader",
					"sass-loader"
				]
			}

		]
	},

	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin()
	]
}
