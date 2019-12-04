/*
<<<<<<< HEAD
<<<<<<< HEAD
 * @Author: 司娟
 * @Date: 2019-11-26 16:38:52
 * @LastEditors: 郭涛
 * @LastEditTime: 2019-11-27 19:06:56
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
'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
const vueLoaderConfig = require('./vue-loader.conf')

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
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
=======
      { 
        test: /\.scss$/, 
        loaders: ["style", "css", "sass"] 
>>>>>>> mac
=======
      { test: /\.scss$/, 
        loaders: ["style", "css", "sass"] 
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
>>>>>>> anfei
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
