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
  }
};
