const webpack = require('webpack');
const path = require('path');

module.exports = env => {

  const removeEmpty = array => array.filter(i => !!i);

  return {
    context: path.resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval-source-map',
    bail: env.prod,
    entry: './main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, "src")],
          exclude: [/node_modules/],
          loader: "babel-loader",
        },
      ]
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, "src"),
      ],
      extensions: ['.js', '.jsx', '.css', '.scss', '.html']
    },
    plugins: removeEmpty([
      new webpack.LoaderOptionsPlugin({
        debug: !env.prod,
        context: __dirname,
      })
    ])
  };
};
