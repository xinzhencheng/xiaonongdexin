<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> e78b967c503d525e1c80e2d05fc760fa025b2c97
/*
<<<<<<< HEAD
<<<<<<< HEAD
 * @Author: 司娟
 * @Date: 2019-11-26 16:38:52
 * @LastEditors: 马川
 * @LastEditTime: 2019-12-04 17:06:49
 * @Description: file content
=======
 * @Author: 马川
 * @Date: 2019-11-23 12:03:56
 * @LastEditors: 马川
 * @LastEditTime: 2019-11-26 21:30:55
 * @Description: 
>>>>>>> mac
=======
 * @Author: 安菲
 * @Date: 2019-11-25 20:02:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-12-04 10:18:03
 * @Description: 
>>>>>>> anfei
 */
<<<<<<< HEAD
=======
>>>>>>> zhangteng
=======
/*
 * @Author: 司娟
 * @Date: 2019-11-26 16:38:52
 * @LastEditors: 司娟
 * @LastEditTime: 2019-11-26 16:58:12
 * @Description: file content
 */
>>>>>>> sijuan
=======

>>>>>>> e78b967c503d525e1c80e2d05fc760fa025b2c97
'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> sijuan
=======

>>>>>>> e78b967c503d525e1c80e2d05fc760fa025b2c97
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}



module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('media/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======


>>>>>>> e78b967c503d525e1c80e2d05fc760fa025b2c97
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },

      { 
        test: /\.scss$/, 
        loaders: ["style", "css", "sass"] 
      },
      { test: /\.scss$/, 
        loaders: ["style", "css", "sass"] 
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
<<<<<<< HEAD
>>>>>>> anfei
=======
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
>>>>>>> sijuan
=======

>>>>>>> e78b967c503d525e1c80e2d05fc760fa025b2c97
      }
    ]
  },
  node: {
    // prevent webpack from injecting useless setImmediate polyfill because Vue
    // source contains it (although only uses it if it's native).
    setImmediate: false,
    // prevent webpack from injecting mocks to Node native modules
    // that does not make sense for the client
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty'
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======

>>>>>>> e78b967c503d525e1c80e2d05fc760fa025b2c97
function resolve(dir) {
	return path.join(__dirname, '..', dir)
}

module.exports = {
	context: path.resolve(__dirname, '../'),
	entry: {
		app: './src/main.js'
	},
	output: {
		path: config.build.assetsRoot,
		filename: '[name].js',
		publicPath: process.env.NODE_ENV === 'production' ?
			config.build.assetsPublicPath :
			config.dev.assetsPublicPath
	},
	resolve: {
		extensions: ['.js', '.vue', '.json'],
		alias: {
			'vue$': 'vue/dist/vue.esm.js',
			'@': resolve('src'),
		}
	},
	module: {
		rules: [{
				test: /\.vue$/,
				loader: 'vue-loader',
				options: vueLoaderConfig
			},
			{
				test: /\.scss$/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
			},
			{
				test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('img/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('media/[name].[hash:7].[ext]')
				}
			},
			{
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
					name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
				}
			}
		]
	},
	node: {
		// prevent webpack from injecting useless setImmediate polyfill because Vue
		// source contains it (although only uses it if it's native).
		setImmediate: false,
		// prevent webpack from injecting mocks to Node native modules
		// that does not make sense for the client
		dgram: 'empty',
		fs: 'empty',
		net: 'empty',
		tls: 'empty',
		child_process: 'empty'
	}
}
<<<<<<< HEAD
>>>>>>> zhangteng
=======
>>>>>>> sijuan
=======

>>>>>>> e78b967c503d525e1c80e2d05fc760fa025b2c97
