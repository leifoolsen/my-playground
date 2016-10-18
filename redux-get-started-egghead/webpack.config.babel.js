const webpack = require('webpack');
const {resolve} = require('path');

module.exports = env => {

  const removeEmpty = array => array.filter(i => !!i);

  return {
    context: resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval-source-map',
    bail: env.prod,
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
    },
    plugins: removeEmpty([
      new webpack.LoaderOptionsPlugin({
        debug: !env.prod
      })
    ])
  };
};
