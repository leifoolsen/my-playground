const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {resolve} = require('path')

module.exports = env => {

  const addPlugin = (add, plugin) => add ? plugin : undefined
  const ifProd = plugin => addPlugin(env.prod, plugin)
  const removeEmpty = array => array.filter(i => !!i)

  return {
    entry: {
      app: './js/app.js',
      vendor: [
        'moment'
        // +++ other 3'rd party
      ]
    },
    output: {
      filename: 'bundle.[name].js',
      path: resolve(__dirname, 'dist'),
      pathinfo: !env.prod
    },
    context: resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval-source-map',
    bail: env.prod,
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel!eslint',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          loader: 'style!css'
        }
      ]
    },
    plugins: removeEmpty([
      new HtmlWebpackPlugin({
        template: './index.html'
      }),

      ifProd(new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      })),

      // Finetuning 'npm run build:prod'
      // Note: remove '-p' from "build:prod" in package.json
      // doesn't save anything in this small app. npm@3 mostly takes care of this
      ifProd(new webpack.optimize.DedupePlugin()),

      // saves a couple of kBs
      ifProd(new webpack.LoaderOptionsPlugin({
        minimize: true,
        debug: false,
        quiet: true
      })),

      // saves 65 kB with Uglify!! Saves 38 kB without
      ifProd(new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      })),

      // saves 711 kB!!
      ifProd(new webpack.optimize.UglifyJsPlugin({
        compress: {
          screw_ie8: true, // eslint-disable-line
          warnings: false
        }
      }))
      // End: finetuning 'npm run build:prod'

    ])
  }
};
