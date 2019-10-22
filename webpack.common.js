const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
	entry: ["@babel/polyfill", path.join(__dirname, "src/index.js")],
	output: {
        filename: "[name].[hash].bundle.js",
        chunkFilename: "[name].[hash].bundle.js",
		path: path.join(__dirname, "dist"),
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: ["babel-loader"]
			},
			{
				test: /\.vue$/,
				use: ["vue-loader"]
			},
			{
				test: /\.(woff|ttf)/,
				loader: "url-loader"
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"]
			},

			{
				test: /\.scss$/,
				use: ["vue-style-loader", "css-loader", "sass-loader"]
			}
		]
	},

	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.join(__dirname, "src/index.html")
		})
	]
};
