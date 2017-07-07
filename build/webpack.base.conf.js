var path = require('path')
var webpack = require('webpack')
var stylus = require('stylus')
var config = require('../config').frontend
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/main.js')
  },
  output: {
    path: config.assetsRoot,
    publicPath: config.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules"
    ],
    enforceExtension: false,
    extensions: ['.js', '.vue'],
    // fallback: [path.join(__dirname, '../node_modules')],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'components': path.resolve(__dirname, '../src/components'),
      'locales': path.resolve(__dirname, '../src/locales'),
      'model': path.resolve(__dirname, '../src/model'),
      'shared': path.resolve(__dirname, '../src/shared'),
      'store': path.resolve(__dirname, '../src/store'),
      'resources': path.resolve(__dirname, '../src/resources'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          postcss: [
            require('autoprefixer')({
              browsers: ['last 3 versions']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'vue-html-loader'
      },
      {
        test: /.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
        /* use: ExtractTextPlugin.extract({
          fallback: "vue-style-loader",
          use: "css-loader",
          publicPath: "/dist"
        })*/
      },
      {
        test: /\.styl$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'stylus-loader',
            options: {
              use: [stylus()],
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('images/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  },
  /* eslint: {
    formatter: require('eslint-friendly-formatter')
  },*/
  plugins: [
    // for jquery
    // new webpack.optimize.CommonsChunkPlugin('common.js'),
    new webpack.ProvidePlugin({
      jQuery: "jquery",
      $: "jquery",
      ol: "openlayers"
    })
  ]
}
