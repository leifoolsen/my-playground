const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = env => {

  const addPlugin = (add, plugin) => add ? plugin : undefined;
  const ifProd = plugin => addPlugin(env.prod, plugin);
  const removeEmpty = array => array.filter(i => !!i);

  return {
    context: path.resolve(__dirname, 'src'),
    devtool: env.prod ? 'source-map' : 'eval-source-map',
    bail: env.prod,
    entry: {
      app: [
        './stylesheets/main.scss',
        './index.js'
      ],
      vendor: [
        'react',
        'react-dom',
        'redux',
        'react-redux',
        // +++ other 3'rd party
      ]
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[name].[hash].js',
      publicPath: '/',
      pathinfo: !env.prod,
    },
    module: {
      rules: [
        {
          test: /\.js[x]?$/,
          enforce: 'pre',
          loader: 'eslint-loader',
          include: [path.resolve(__dirname, "src")],
          exclude: [/node_modules/],
        },
        {
          test: /\.js[x]?$/,
          include: [path.resolve(__dirname, "src")],
          exclude: [/node_modules/],
          loader: "babel-loader",
        },
        {
          // See: https://github.com/webpack/webpack/issues/2812
          test: /\.s?(a|c)ss$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css?sourceMap', 'postcss', 'resolve-url', 'sass?sourceMap&expanded']
          })
        },
        {
          test: /\.(jpg|jpeg|png|svg)$/,
          use: ['url-loader'],
        },
        {
          test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ['url-loader?limit=100000&mimetype=application/font-woff']
        },
        {
          test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
          use: ['file-loader?limit=100000']
        },
      ]
    },

    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, "src"),
      ],
      extensions: ['.js', '.jsx', '.css', '.sass', '.scss', '.html']
    },

    plugins: removeEmpty([
      new webpack.LoaderOptionsPlugin({
        debug: !env.prod,
        context: __dirname,
        eslint: {
          failOnWarning: false,
          failOnError: true
        },
        sassLoader: {
          includePaths: [
            path.resolve(__dirname, './node_modules'),
            path.resolve(__dirname, './src')
          ]
        },
        postcss: [
          require('precss'),
          require('autoprefixer'),
          autoprefixer({
            browsers: ['last 2 versions', 'ie 11']
          })
        ],
      }),

      new HtmlWebpackPlugin({
        template: './index.html'
      }),

      new ExtractTextPlugin({
        filename: 'styles.css',
        disable: false,
        allChunks: true
      }),

      new StyleLintPlugin({
        // https://github.com/vieron/stylelint-webpack-plugin
        // http://stylelint.io/user-guide/example-config/
        configFile: '.stylelintrc',
        context: 'src',
        files: '**/*.s?(a|c)ss',
        syntax: 'scss',
        failOnError: false
      }),

      new CopyWebpackPlugin([
        { from: 'favicon.png' }
      ]),

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
      })),
      // End: finetuning 'npm run build:prod'

    ])
  };
};
