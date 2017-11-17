const { join, resolve } = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = env => {
  return {
    devtool: 'eval-source-map',
    entry: {
      login: './src/js/login.js',
      index: './src/js/index.js'
    },
    output: {
      publicPath: '',
      path: resolve(__dirname, 'dist'),
      filename: 'js/' + (env.dev ? '[name].js' : '[name].[chunkhash].js')
    },
    plugins: [
      new webpack.BannerPlugin('© 2017 iget365.com'),
      new HtmlWebpackPlugin({
        title: 'login - iget app',
        filename: 'login.html',
        template: './src/login.html',
        chunks: ['login']
      }),
      new HtmlWebpackPlugin({
        title: 'index - iget app',
        filename: 'index.html',
        template: './src/index.html',
        chunks: ['index']
      }),
      new HtmlWebpackPlugin({
        title: 'about - iget app',
        filename: 'about.html',
        template: './src/about.html',
        chunks: []
      }),
      new HtmlWebpackPlugin({
        title: 'help - iget app',
        filename: 'help.html',
        template: './src/help.html',
        chunks: []
      })
    ]
  }
}