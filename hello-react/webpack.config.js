//require('./node_modules/es6-promise'); // Not needed for Node v4

module.exports = {
  entry: {
    app: ['./app/main.jsx']
  },
  output: {
    path: './app',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  module: {
    loaders: [ {
      test: /\.js[x]?$/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react', 'stage-0']
      }
    } ]
  }
};
