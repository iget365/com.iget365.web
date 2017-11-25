'use strict'
const fs = require('fs')
const webpack = require('webpack')
const config = require('./config')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const env = {
  NODE_ENV: JSON.stringify(process.env.NODE_ENV || config.dev.NODE_ENV)
}

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: config.dev.devtool,
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    hot: true,
    host: process.env.HOST || config.dev.host,
    port: process.env.PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    proxy: config.dev.proxy,
    publicPath: config.dev.assetsPublicPath,
    quiet: false,
    watchOptions: {
      poll: true
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})

module.exports = devWebpackConfig
