/* eslint-disable no-console */
const gulp = require('gulp');
const webpack = require('webpack');
const config = require('../webpack.config.js');

const compile = (callback) => {
  webpack(config, (err, stats) => {
    if (err) {
      console.error(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
};

gulp.task('scripts', ['env:dev'], compile);
gulp.task('scripts:dist', ['env:prod'], compile);
