const webpack = require('webpack');
const {resolve} = require('path');

module.exports = env => {

  return {
    context: resolve(__dirname, 'src'),

    entry: './main.js',
    output: {
      path: resolve(__dirname, 'dist'),
      filename: 'index.js',
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
    resolve: {
      modules: [
        resolve(__dirname, "src"),
        'node_modules'
      ],
      extensions: ['.js', '.jsx', '.css', '.scss', '.html']
    }
  };
};
