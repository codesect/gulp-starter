import autoprefixer from 'autoprefixer';
import cleanCSS from 'gulp-clean-css';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import nodeSass from 'node-sass';
import normalize from 'postcss-normalize';
import postCSS from 'gulp-postcss';
import rev from 'gulp-rev';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

import { distCSS, srcSass } from './config';

sass.compiler = nodeSass;

const isProduction = process.env.NODE_ENV === 'production';
const sassOptions = {
  outputStyle: isProduction ? 'compressed' : 'expanded',
};

const postCSSPlugins = [
  normalize({
    forceImport: 'sanitize.css',
  }),
  autoprefixer,
];

function styles() {
  return gulp
    .src(srcSass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(postCSS(postCSSPlugins))
    .on('error', err => {
      // eslint-disable-next-line no-console
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(gulpIf(isProduction, cleanCSS()))
    .pipe(gulpIf(isProduction, rev()))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(distCSS));
}

export default styles;
