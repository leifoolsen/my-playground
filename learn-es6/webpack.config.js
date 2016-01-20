//require('./node_modules/es6-promise'); // Not needed for Node v4

var path = require('path');

module.exports = {
  debug: true,
  devtool: 'eval-source-map',
  entry: [
    'babel-polyfill',                      // Set up an ES6-ish environment
    path.join(__dirname, 'src/main.js')    // Application's scripts
  ],
  output: {
    publicPath: '/',
    path: __dirname,
    filename: '/bundle/bundle.js'
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
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
        include: path.join(__dirname, "src"),  // Skip any files outside of your project's `src` directory
        loader: 'babel-loader',
        query: {                               // Options to configure babel with
          plugins: ['transform-runtime'],
          presets: ['es2015', 'stage-0']
        }
      }
    ]
  },
  devServer: {
    contentBase: './src'
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
      'no-underscore-dangle': 0,
      'indent': [1, 2],
      'quotes': 0,
      'linebreak-style': [2, 'unix'],
      'semi': [2, 'always']
    }
  }
};
