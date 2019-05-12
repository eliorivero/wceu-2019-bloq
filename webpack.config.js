const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const OptimizeCSSAssetsPlugin = require( 'optimize-css-assets-webpack-plugin' );
const webpackConfig = {
	mode: process.env.NODE_ENV || 'development',
	entry: {
		main: './main.js',
	},
	output: {
		path: path.join( __dirname, 'build' ),
		filename: '[name].build.js'
	},
	optimization: {
		minimizer: [ new OptimizeCSSAssetsPlugin( {} ) ],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/preset-env' ],
						plugins: [ '@babel/plugin-proposal-class-properties' ],
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	plugins: [
		new MiniCssExtractPlugin( { filename: '[name].style.css' } ),
	]
};

module.exports = webpackConfig;
