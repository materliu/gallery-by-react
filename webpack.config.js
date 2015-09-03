/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');

module.exports = {

  output: {
    filename: 'main.js',
    publicPath: '/assets/'
  },

  cache: true,
  debug: true,
  devtool: 'sourcemap',
  entry: [
      'webpack/hot/only-dev-server',
      './src/components/GalleryByReactApp.js'
  ],

  stats: {
    colors: true,
    reasons: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      'styles': __dirname + '/src/styles',
      'mixins': __dirname + '/src/mixins',
      'components': __dirname + '/src/components/'
    }
  },
  module: {
    preLoaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'// transpiling compiling
    }, {
      test: /\.scss/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}!sass-loader?outputStyle=expanded'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["last 2 version", "firefox 15"]}'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }, {
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=8192'
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

};

