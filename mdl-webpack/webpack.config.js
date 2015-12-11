if (!global.Promise) {
  console.log("require es6-promise");
  global.Promise = require('es6-promise').polyfill();
}

const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const cssLoader = [
  'css-loader?sourceMap',
  'postcss-loader'
].join('!');

const sassLoader = [
  'css-loader?sourceMap',
  'postcss-loader',
  'sass-loader?sourceMap&expanded'
].join('!');

module.exports = {
  debug: true,
  cache: true,
  devtool: 'eval-source-map', // 'source-map' or 'inline-source-map' or 'eval-source-map'
                              // eval-source-map gives sourcemaps without slowing down rebundling
  entry: {
    app: [
      path.join(__dirname, 'src/main.scss'), // Styles
      'babel-polyfill',                      // Babel requires some helper code to be run before your application
      path.join(__dirname, 'src/main.js')    // Add your application's scripts last
    ],
    vendor: [                                // Scripts packaged into 'vendor.js'
      'moment',
      'material-design-lite/material'
      //'react',
      //'react-dom',
      // +++ other 3'rd party
    ]
  },
  output: {
    path             : path.join(__dirname, 'dist'),
    filename         : '[name].js',
    sourceMapFilename: '[file].map',
    chunkFilename    : '[id].js',
    pathinfo         : true,
    publicPath       : '/static/'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx', '.css', '.scss', '.html']
  },
  module: {
    preLoaders: [
      {
        test: /\.js[x]?$/,
        include: [                     // ... or: exclude: /(node_modules|bower_components)/,
          path.join(__dirname, 'src'),
          path.join(__dirname, 'test')
        ],
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /\.js[x]?$/,                        // Only run `.js` and `.jsx` files through Babel
        include: path.resolve(__dirname, 'src'),  // Skip any files outside of your project's `src` directory
        loader: 'babel-loader',
        query: {                                  // Options to configure babel with
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0']
        }
      },
      {
        test: /\.html$/,
        include: path.join(__dirname, 'src/html'),
        loader: "html-loader"
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style-loader', sassLoader)
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style-loader', cssLoader)
      },
      // Images
      // inline base64 URLs for <=16k images, direct URLs for the rest
      {
        test: /\.jpg/,
        loader: 'url-loader',
        query: {
          limit: 8192,
          mimetype: 'image/jpg',
          name: '/images/[name].[ext]'
        }
      },
      {
        test: /\.gif/, loader: 'url-loader?limit=8192&mimetype=image/gif&name=/images/[name].[ext]'
      },
      {
        test: /\.png/, loader: 'url-loader?limit=8192&mimetype=image/png&name=/images/[name].[ext]'
      },
      {
        test: /\.svg/, loader: 'url-loader?limit=16384&mimetype=image/svg+xml&name=/images/[name].[ext]'
      },
      // Fonts
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=16384&mimetype=application/font-woff&name=/fonts/[name].[ext]'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=16384&mimetype=application/octet-stream&name=/fonts/[name].[ext]"
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader&name=/fonts/[name].[ext]"
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    /*
    new webpack.optimize.CommonsChunkPlugin({
      children: true, // extract common js from children
      async: true,    // and aysnc chunks
      minChunks: 3    // where there are 3 or more and put commons into main.js
    }),
    */
    new ExtractTextPlugin('styles.css', {
			disable: false,
			allChunks: true
		}),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new CopyWebpackPlugin([
      { from: 'node_modules/material-design-lite/dist/images', to: 'images/mdl' }
    ])

    // Do not use:
    //   new webpack.HotModuleReplacementPlugin()
    //   new webpack.NoErrorsPlugin()
    // Use:
    //   '--hot --inline --module-bind'
    //
    // see: https://github.com/webpack/docs/wiki/hot-module-replacement-with-webpack
  ],
  postcss: [
    autoprefixer({
      browsers: ['last 3 versions']
    })
  ],
  devServer: {
    contentBase: './src',
    port: 8080,
    progress: true,
    colors: true,
    hot: true,                  // adds the HotModuleReplacementPlugin.
    historyApiFallback: false,  // when false, dev server make directory listing, good feature to navigate in project
    quiet: false,
    noInfo: false,
    lazy: false,
    aggregateTimeout: 300,
    proxy: {
      // Our rest server
      '/api/*': {
        target: 'http://localhost:8081',
        secure: false
      }
    }
  },
  eslint: {
    // See: http://eslint.org/docs/user-guide/configuring.html
    // See: https://gist.github.com/nkbt/9efd4facb391edbf8048
    'parser': 'babel-eslint',
    'env': {
      'browser': true,
      'node': true,
      'es6': true
    },
    'settings': {
      'ecmascript': 7,
      'jsx': true
    },
    'rules': {
      'strict': 0,
      'no-unused-vars': 2,
      'camelcase': 1,
      'no-underscore-dangle': 1,
      'indent': [1, 2],
      'quotes': 0,
      'linebreak-style': [2, 'unix'],
      'semi': [2, 'always']
    }
  }
};
