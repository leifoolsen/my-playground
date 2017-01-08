const chalk = require('chalk');
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const argv = require('./server/array-to-key-value').arrayToKeyValue(process.argv.slice(2));

const isDev = process.env.NODE_ENV !== 'production' && !argv['env.prod'];
const isProd = !isDev;
const isHot = argv['hot'] || false;
const src = path.resolve(process.cwd(), 'src');
const dist = path.resolve(process.cwd(), 'dist');
const publicPath = '/';

console.log('Webpack argv:', argv, 'isDev:', isDev, 'isHot:', isHot);

const removeEmptyKeys = obj => {
  const result = {};
  for (const key in obj) {
    if (!(obj[key] == null || obj[key].length === 0)) {
      result[key] = obj[key];
    }
  }
  return result;
};

const devPlugins = () => {

  if(isDev) {
    const manifest = path.resolve(dist, 'vendor.json');
    const indexHTML = path.resolve(src, 'index.html');

    if (!fs.existsSync(manifest)) {
      console.error(chalk.red(`The DLL manifest "${manifest}" is missing.`));
      console.error(chalk.red('Please run'), chalk.green('`npm run build:dll`'));
      process.exit(0);
    }

    if (!fs.existsSync(indexHTML)) {
      console.error(chalk.red(`"${indexHTML}" is missing.`));
      process.exit(0);
    }

    const templateContent = () => {
      // Append 'vendor.dll.js' to template
      const jsdom = require('jsdom');
      const document = jsdom.jsdom(fs.readFileSync(indexHTML, 'utf8').toString());
      document.body.insertAdjacentHTML('beforeend', `<script type="text/javascript" src="${publicPath}vendor.dll.js"></script>`);
      return jsdom.serializeDocument(document);
    };

    return [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(manifest)
      }),

      new HtmlWebpackPlugin({
        templateContent: templateContent(),
        inject: true,
        favicon: 'favicon.png',
        chunksSortMode: 'none',
        xhtml: true,
      }),
    ];
  }
  return [];
};

const hotPlugins = isHot ? [
  new webpack.HotModuleReplacementPlugin({
    multiStep: true, // Enable multi-pass compilation for enhanced performance in larger projects.
  }),
] : [];

const prodPlugins = isProd ? [
  // Note: do not use '-p' in "build:prod" script


  // CommonsChunk analyzes everything in your bundles, extracts common bits into files together.
  // See: https://webpack.js.org/guides/code-splitting-libraries/
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor', 'manifest'],
  }),

  // Minify and optimize the index.html
  new HtmlWebpackPlugin({
    template: './index.html',
    inject: true,
    favicon: 'favicon.png',
    // Correct bundle order: [manifest, vendor, app]
    // see: http://stackoverflow.com/questions/36796319/webpack-with-commonschunkplugin-results-with-wrong-bundle-order-in-html-file
    // see: https://github.com/ampedandwired/html-webpack-plugin/issues/481
    chunksSortMode: 'dependency',
    xhtml: true,
    minify: {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      removeStyleLinkTypeAttributes: true,
      keepClosingSlash: true,
      minifyJS: true,
      minifyCSS: true,
      minifyURLs: true,
    },
  }),

  // Merge all duplicate modules
  // No longer needed; default in webpack2
  //new webpack.optimize.DedupePlugin(),

  new webpack.LoaderOptionsPlugin({
    minimize: true,
    debug: false,
    quiet: true
  }),

  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      screw_ie8: true,
      conditionals: true,
      unused: true,
      comparisons: true,
      sequences: true,
      dead_code: true,
      evaluate: true,
      if_return: true,
      join_vars: true,
      dead_code: true,
    },
    output: {
      comments: false
    },
    sourceMap: true
  }),
] : [];


const cssRules = isHot ? [
  {
    // Enables HMR. Inlines CSS in html head style tag
    test: /\.css$/,
    include: [
      src,
      path.resolve(process.cwd(), 'node_modules')
    ],
    use: [
      'style-loader',
      // urls does not work when using sourceMap.
      // See: https://github.com/webpack/css-loader/issues/216
      // See: https://github.com/webpack/css-loader/issues/296
      // See: http://stackoverflow.com/questions/37288886/webpack-background-images-not-loading
      'css-loader', // { loader: 'css', query: { sourceMap: true } },
      'postcss-loader',
      'resolve-url-loader',
    ]
  },
  {
    // Enables HMR. Inlines CSS in html head
    test: /\.s?(a|c)ss$/,
    include: [
      src,
      path.resolve(process.cwd(), 'node_modules')
    ],
    use: [
      'style-loader',
      'css-loader', // { loader: 'css', query: { sourceMap: true } }, // urls does not work when using sourceMap, see: comments above
      'postcss-loader',
      'resolve-url-loader',
      { loader: 'sass-loader', query: { sourceMap: isProd ? 'compressed' : 'expanded' } },
    ]
  },
] : [
  {
    // No HMR. Creates external CSS
    test: /\.css$/,
    include: [
      src,
      path.resolve(process.cwd(), 'node_modules')
    ],
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: ['css-loader?sourceMap', 'postcss-loader', 'resolve-url-loader']
    })
  },
  {
    // No HMR. Creates external CSS
    test: /\.s?(a|c)ss$/,
    include: [
      src,
      path.resolve(process.cwd(), 'node_modules')
    ],
    loader: ExtractTextPlugin.extract({
      fallbackLoader: 'style-loader',
      loader: [
        {
          loader: 'css-loader', query: { sourceMap: true }
        },
        'postcss-loader',
        'resolve-url-loader',
        {
          loader: 'sass-loader', query: { sourceMap: isProd ? 'compressed' : 'expanded' }
        }
      ]
    })
  }
];

module.exports = {
  context: src,

  // Developer tool to enhance debugging, source maps
  // see: http://webpack.github.io/docs/configuration.html#devtool
  // see: http://moduscreate.com/optimizing-react-es6-webpack-production-build/
  // see: https://github.com/gaearon/react-hot-loader/blob/master/docs/Troubleshooting.md
  // see: https://twitter.com/dan_abramov/status/555770268489375746
  // inline-source-map, see: https://github.com/webpack/webpack/issues/2145
  // Redux and eval, see: see: https://twitter.com/dan_abramov/status/706294608603553793
  // devtool: isProd ? 'cheap-module-source-map' : 'eval',
  // devtool: isProd ? 'cheap-module-source-map' : 'cheap-module-eval-source-map', // 'cheap-module-source-map': not possible to map errors to source in production
  // devtool: isProd ? 'source-map' : 'cheap-module-eval-source-map', // 'source-map': detailed mapping of errors to source in production
  devtool: isProd ? 'source-map' : 'cheap-module-source-map',
  cache:   !isProd,
  bail:    isProd,  // Don't attempt to continue if there are any errors.
  target:  'web',   // Make web variables accessible to webpack, e.g. window. This is a default value; just be aware of it
  resolve: {
    modules: [
      'src',
      'node_modules',
    ],
    extensions: ['.js', '.jsx', '.json', '.css', '.sass', '.scss', '.html']
  },
  entry: removeEmptyKeys({
    // Correct bundle order: [manifest, vendor, app]
    // see: http://stackoverflow.com/questions/36796319/webpack-with-commonschunkplugin-results-with-wrong-bundle-order-in-html-file
    // see: https://github.com/ampedandwired/html-webpack-plugin/issues/481
    vendor: isProd ? ['babel-polyfill', './vendor.js'] : [],
    app: (isHot ? [
      // Dynamically set the webpack public path at runtime below
      // Must be first entry to properly set public path
      // See: http://webpack.github.io/docs/configuration.html#output-publicpath
      './webpack-public-path.js',

      // reload - Set to true to auto-reload the page when webpack gets stuck. (React: use reload=false)
      // See: https://github.com/glenjamin/webpack-hot-middleware
      // 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',
      // `webpack-hot-middleware/client?path=http://${host}:${port}/__webpack_hmr&timeout=20000&reload=true`,
      // 'webpack-hot-middleware/client',
      'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',

      // Webpack2: remove any reference to webpack/hot/dev-server or webpack/hot/only-dev-server
      // from your webpack config. Instead, use the reload config option of 'webpack-hot-middleware'.
      // See: https://github.com/glenjamin/webpack-hot-middleware#200
      //'webpack/hot/only-dev-server',

    ] : [] ).concat([
      './index.js',
      './styles.scss',
    ]),
  }),
  output: {
    filename: isProd ? '[name].[chunkhash].js' : '[name].js', // Don't use hashes in dev mode
    chunkFilename: isProd ? '[name].[chunkhash].chunk.js' : '[name].chunk.js',
    path: dist,
    publicPath: publicPath,
    pathinfo: !isProd,
  },
  performance: {
    hints: isProd ? 'warning' : false,
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [src],
        exclude: [/node_modules/],
      },
      {
        test: /\.js[x]?$/,
        include: [src],
        exclude: [/node_modules/],
        loader: 'babel-loader',
      },
      {
        // Enables HMR. Extra step is needed in './src/index.js'
        test: /\.html$/,
        loader: 'html-loader', // loader: 'html', // loader: 'raw' // html vs raw: what's the difference??
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(jpg|jpeg)$/,
        loader: 'url-loader?name=[name].[ext]&limit=8192&mimetype=image/jpg'
      },
      {
        test: /\.gif$/,
        loader: 'url-loader?name=[name].[ext]&limit=8192&mimetype=image/gif'
      },
      {
        test: /\.png$/,
        use: 'url-loader?name=[name].[ext]&limit=8192&mimetype=image/png'
      },
      {
        test: /\.svg$/,
        loader: 'url-loader?name=[name].[ext]&limit=8192&mimetype=image/svg+xml'
      },
      {
        test: /\.woff?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url-loader?name=[name].[ext]&limit=100000&mimetype=application/font-woff']
      },
      {
        test: /\.woff2?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['url-loader?name=[name].[ext]&limit=100000&mimetype=application/font-woff2']
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: ['file-loader?name=[name].[ext]&limit=100000&mimetype=application/octet-stream']
      },
      {
        test: /\.otf(\?.*)?$/,
        loader: 'file-loader?name=[name].[ext]&limit=10000&mimetype=font/opentype'
      },
    ].concat(cssRules)
  },
  plugins: [
    // Always expose NODE_ENV to webpack, in order to use `process.env.NODE_ENV`
    // inside your code for any environment checks; UglifyJS will automatically
    // drop any unreachable code.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': isProd ? JSON.stringify('production') : JSON.stringify('development'),
      __DEV__: !isProd
    }),

    new webpack.ProvidePlugin({
      // make fetch available
      // See: http://mts.io/2015/04/08/webpack-shims-polyfills/
      'fetch': 'imports-loader?this=>global!exports-loader?global.fetch!whatwg-fetch',
    }),

    // Hook into the compiler to extract progress information.
    //new webpack.ProgressPlugin(),

    new webpack.LoaderOptionsPlugin({
      // See: https://github.com/postcss/postcss-loader/issues/125
      // See: http://pastebin.com/Lmka3rju
      minimize: isProd,
      debug: !isProd,
      stats: {
        colors: true
      },
      options: {
        context: src,
        output: {
          path: dist,
        },
        postcss: [
          precss,
          autoprefixer({
            browsers: [
              'last 2 versions',
              'ie >= 11',
            ],
          }),
        ],
      },
      eslint: {
        failOnWarning: false,
        failOnError: true
      },
    }),

    // Avoid publishing files when compilation fails
    new webpack.NoErrorsPlugin(),

    // No longer needed in Webpack2, on by default
    //new webpack.optimize.OccurrenceOrderPlugin(),

    // Generate an external css file with a hash in the filename
    new ExtractTextPlugin({
      filename: isProd ? '[name].[chunkhash].styles.css' : '[name].styles.css',
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
      //{ from: 'favicon.png' },
      { from: 'assets', to: 'assets' }
    ]),

    // Module ids are full names
    // Outputs more readable module names in the browser console on HMR updates
    new webpack.NamedModulesPlugin(),

  ].concat(devPlugins()).concat(hotPlugins).concat(prodPlugins)
};
