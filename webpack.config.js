const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const webpack = require('webpack')

module.exports = {
	entry: ['./src/scripts/app.js', './src/scripts/imports.js'],
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
  		compress: true,
		port: 3000
	},
	resolve: {
        alias: {
            jquery: "jquery/src/jquery"
        }
    },
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
				  		presets: ['es2015', 'react', 'stage-2'],
					}
				}
			},
			{
				test: /\.(png|svg|jpe?g|gif|ico)$/,
				use: {
					loader: 'file-loader',
					options: {
						outputPath: 'images/',
						publicPath: 'images/',
						name: '[name].[ext]'
					}  
				}	 			
			}, 
			{
				test: /(\.css|\.scss)$/,
				exclude: /node_modules/,
				use: ExtractTextPlugin.extract({
		        	fallback: "style-loader",
		        	use:[
			        	{
			        		loader: "css-loader",
			        		options: { 
			        			minimize: true,
                                sourceMap: true
			        		}
			        	},
						{
						  loader: 'postcss-loader', 
						  options: {
						    plugins: function () { 
						      return [
						        require('precss'),
						        require('autoprefixer')
						      ];
						    }
						  }
						},
			        	{
			        		loader: "sass-loader"
			        	}
		        	]
		        })
			},
			{
	            test: /[\/\\]node_modules[\/\\]some-module[\/\\]index\.js$/,
	            loader: "imports-loader?this=>window"
        	},
        	{
				test: require.resolve('jquery'),
				use: [{
				  loader: 'expose-loader',
				  options: 'jQuery'
				},{
				  loader: 'expose-loader',
				  options: '$'
				}]
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('main.css'),
		new BrowserSyncPlugin({
	      host: 'localhost',
	      files: [
				'./**/*.html',
				'./*.html',
				'./**/*.js',
				'./*.js',
				'./**/*.scss',
				'./*.scss',
				'./**/*.css',			
				'./*.css'			
			],
			port: 9000,
			server: { baseDir: ['dist'] }
	    }),
	    new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'src/index.html',
			title: 'Abecedario LSC',
			minify: {
				collapseWhitespace: true
			}
		}),
		new webpack.ProvidePlugin({
			'window.jQuery': 'jquery',
			'window.$': 'jquery',
			'jQuery': 'jquery',
			'$': 'jquery'
        })
	]
}