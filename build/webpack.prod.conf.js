'use strict'
const webpack = require('webpack')
const config = require('./config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const env = {
  NODE_ENV: process.env.NODE_ENV || config.build.NODE_ENV
}

const webpackConfig = merge(baseWebpackConfig, {
  devtool: config.dev.devtool,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: true,
      parallel: true
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
})

module.exports = webpackConfig
