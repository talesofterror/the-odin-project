const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		assetModuleFilename: "images/[name][ext]",
	},
	devtool: "eval-source-map",
	devServer: {
		watchFiles: ["./src/template.html"],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Sup",
			template: "./src/template.html",
		}),
	],
	module: {
		rules: [
			{
				test: /\.css/i,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
}
