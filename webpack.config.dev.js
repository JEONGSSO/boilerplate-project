const Merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = Merge(baseConfig, {
   mode: 'development',
   devServer: {
      port: 9999,
   },
   devtool: "source-map"
})