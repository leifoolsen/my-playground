var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app-bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'source-map',
  stats: {
    colors: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};
