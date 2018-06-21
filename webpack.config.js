const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

const config = {
  entry: {
    main: './src/scripts/main.js',
    vendor: './src/scripts/vendor.js',
  },
  output: {
    path: path.join(__dirname, './src/temp/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
    ],
  },
};

if (isDev) {
  config.mode = 'development';
  config.module.rules[0].loaders.push('eslint-loader');
} else {
  config.mode = 'production';
  config.plugins = [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new UglifyJSPlugin({
      uglifyOptions: {
        compress: {
          warnings: true,
        },
        output: {
          beautify: false,
        },
        warnings: true,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ];
}

module.exports = config;
