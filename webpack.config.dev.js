const Merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = Merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: 9999,
    historyApiFallback: true,
    hot: true
  }
})
