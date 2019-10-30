import gulp from 'gulp';
import gulpIf from 'gulp-if';
import rev from 'gulp-rev';
import webpack from 'webpack-stream';

import { distJS, srcJS, sourcemapJS } from './config';

const isProduction = process.env.NODE_ENV === 'production';
const webpackConfig = {
  devtool: sourcemapJS,
  mode: isProduction ? 'production' : 'development',
  output: { filename: '[name].js' },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
};

function scripts() {
  return gulp
    .src(srcJS)
    .pipe(webpack(webpackConfig))
    .pipe(gulpIf(isProduction, rev()))
    .pipe(gulp.dest(distJS));
}

export default scripts;
