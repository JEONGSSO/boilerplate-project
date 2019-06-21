const path = require('path');
const HtmlWebpackPlugin =require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      filename: '[name].bundle.js',
      path: path.join(__dirname, 'dist')
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
         },
         {
            test: /\.(sc|sa|c)ss$/,
            use: ['style-loader', 'css-loader'],
            exclude: /node_modules/,
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ]
}