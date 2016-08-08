var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  devtool: 'cheap-module-eval-source-map',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app-bundle.js',
    pathinfo: true,
    publicPath: '/static/'
  },
  stats: {
    colors: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: './src',
    port: 8088,
    inline: true,
  }
};
