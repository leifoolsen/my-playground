const { resolve } = require('path');

module.exports = () => {

  return {
    entry: './main.js',
    output: {
      path: resolve(__dirname, './'),
      filename: 'index.js'
    },
    devServer: {
      inline: true,
      port: 3333
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /node_modules/
        }
      ]
    }
  };
};
