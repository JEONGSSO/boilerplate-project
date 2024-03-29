const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env, argv) => {
  let config = {
    entry: './src/index.js',
    output: {
      filename: '[name].bundle.js',
      path: resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg)$/,
          use: {
            loader: 'url-loader?limit=100000',
          },
        },
        {
          test: /\.(sc|sa|c)ss$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
            },
            'css-loader',
            'sass-loader',
          ],
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      alias: {
        '@src': resolve(__dirname, 'src/'),
      },
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
    },
  };

  if (argv.mode === 'development') {
    config = {
      ...config,
      plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          template: './src/index.html',
          title: 'Development',
          showErrors: true,
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css',
          chunkFilename: '[id].css',
        }),
      ],
      devServer: {
        port: 3000,
        overlay: true,
        historyApiFallback: true,
      },
      devtool: 'eval-cheap-module-source-map',
    };
  }

  return config;
};
