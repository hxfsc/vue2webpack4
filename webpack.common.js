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
	resolve: {
		extensions: ["*", ".js", ".vue"],
		alias: {
			"@components": path.resolve(__dirname, "src/components"),
			"@pages": path.resolve(__dirname, "src/pages")
		}
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
			},

			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: "file-loader",
						options: {}
					}
				]
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
