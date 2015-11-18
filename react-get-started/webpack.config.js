require('./node_modules/es6-promise'); // Not needed for Node v4
var webpack = require('webpack');
var path = require('path');

module.exports = {
  debug: true,
  devtool: 'eval-source-map',
  entry: [
    path.join(__dirname, 'src/main.scss'),
    'babel-polyfill',                     // Babel requires some helper code to be run before your application
    path.join(__dirname, 'src/main.jsx')  // Add your application's scripts last
  ],
  output: {
    publicPath: '/static/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    preLoaders: [
      {
        test: /\.js[x]?$/,
        include: [
          path.join(__dirname, 'src'),
          path.join(__dirname, 'test')
        ],
        //exclude: /(node_modules|bower_components)/,
        loaders: ['eslint']
      }
    ],
    loaders: [
      {
        test: /\.js[x]?$/,                     // Only run `.js` and `.jsx` files through Babel
        include: path.join(__dirname, 'src'),  // Skip any files outside of your project's `src` directory
        loader: 'babel-loader',
        query: {                               // Options to configure babel with
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0', 'react']
        }
      },
      {
        test: /\.scss$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style', 'css?sourceMap', 'autoprefixer?browsers=last 3 versions', 'sass?expanded&sourceMap']
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src'),
        loaders: ['style', 'css?sourceMap', 'autoprefixer?browsers=last 3 versions']
      },
      // images
      {
        test: /\.jpg/,
        loader: 'url-loader',
        query: {
          limit: 16384,
          mimetype: 'image/jpg'
        }
      },
      {
        test: /\.gif/, loader: 'url-loader?limit=16384&mimetype=image/gif'
      },
      {
        test: /\.png/, loader: 'url-loader?limit=16384&mimetype=image/png'
      },
      {
        test: /\.svg/, loader: 'url-loader?limit=16384&mimetype=image/svg'
      },
      // fonts
      {
        test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=16384&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader'
      }
    ]
  },
  devServer: {
    contentBase: './src'
  },
  eslint: {
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
