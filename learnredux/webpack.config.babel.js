const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
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
          enforce: 'pre',
          loader: 'eslint-loader',
          include: [path.resolve(__dirname, "src")],
          exclude: [/node_modules/],
        },
        {
          test: /\.js$/,
          include: [path.resolve(__dirname, "src")],
          exclude: [/node_modules/],
          loader: "babel-loader",
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            }
          ],
        },
        {
          test: /\.styl$/,
          use: [
            'style-loader',
            'css-loader',
            'stylus-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: function () {
                  return [
                    require('precss'),
                    require('autoprefixer')
                  ];
                }
              }
            }
          ],
        },
      ]
    },
    resolve: {
      modules: [
        'node_modules',
        path.resolve(__dirname, "src"),
      ],
      extensions: ['.js', '.jsx', '.css', '.scss', '.styl', '.html']
    },
    plugins: removeEmpty([
      new webpack.LoaderOptionsPlugin({
        debug: !env.prod,
        context: __dirname,
      }),

      //new StyleLintPlugin({
      //  // https://github.com/vieron/stylelint-webpack-plugin
      //  // http://stylelint.io/user-guide/example-config/
      //  configFile: '.stylelintrc',
      //  context: 'inherits from webpack',
      //  files: '**/*.s?(a|c)ss',
      //  syntax: 'scss',
      //  failOnError: false
      //}),

    ])
  };
};
