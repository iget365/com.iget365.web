'use strict'
const path = require('path')
const config = require('./config')
const vueLoaderConfig = require('./vue-loader.conf')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin
const EslintFriendlyFormatter = require('eslint-friendly-formatter')
const isProd = process.env.NODE_ENV === 'production'

function resolve (dirOrPath) {
  return path.join(__dirname, '..', dirOrPath)
}

module.exports = {
  context: resolve('/'),
  entry: {
    vendor: ['vue', 'vue-router', 'axios'],
    login: resolve('src/js/login.js'),
    index: resolve('src/js/index.js')
  },
  output: {
    path: resolve('dist'),
    filename: 'js/' + (isProd ? '[name].[chunkhash].js' : '[name].js'),
    publicPath: isProd ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src')],
      options: {
        formatter: EslintFriendlyFormatter,
        emitWarning: true
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src')]
    }, {
      test: /\.html(\?.+)?$/,
      loader: 'html-loader',
      options: {
        attrs: ['img:src', ':data-src']
      }
    }, {
      test: /favicon\.ico(\?.+)?$/,
      loader: 'file-loader',
      options: {
        name: '[name].[hash:8].[ext]'
      }
    }, {
      test: /\.css(\?.+)?$/,
      use: ExtractTextPlugin.extract({
        fallback: 'vue-style-loader',
        use: [{
          loader: 'css-loader?minimize'
        }]
      })
    }, {
      test: /\.(png|jpe?g|gif|ico|svg)(\?.+)?$/,
      loader: 'url-loader',
      options: {
        limit: 3000,
        name: 'img/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.+)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: 'media/[name].[hash:8].[ext]'
      }
    }, {
      test: /\.(woff2?|eot|ttf|otf)(\?.+)?$/,
      loader: 'file-loader',
      options: {
        name: 'font/[name].[hash:8].[ext]'
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'login.html',
      template: resolve('src/login.html'),
      chunks: ['vendor', 'login'],
      minify: isProd ? config.build.html.minify : config.dev.html.minify
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: resolve('src/index.html'),
      chunks: ['vendor', 'index'],
      minify: isProd ? config.build.html.minify : config.dev.html.minify
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: resolve('src/about.html'),
      chunks: [],
      minify: isProd ? config.build.html.minify : config.dev.html.minify
    }),
    new HtmlWebpackPlugin({
      filename: 'help.html',
      template: resolve('src/help.html'),
      chunks: [],
      minify: isProd ? config.build.html.minify : config.dev.html.minify
    }),
    new ExtractTextPlugin('css/' + (isProd ? '[name].[contenthash:8].css' : '[name].css')),
    new CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new CopyWebpackPlugin([{
      from: resolve('src/favicon.ico')
    }])
  ]
}
