import fileInclude from 'gulp-file-include';
import gulp from 'gulp';
import gulpIf from 'gulp-if';
import htmlmin from 'gulp-htmlmin';

import { distHTML, srcHTMLBuild } from './config';

const isProduction = process.env.NODE_ENV === 'production';

function html() {
  return gulp
    .src(srcHTMLBuild)
    .pipe(fileInclude({ prefix: '@@', basepath: '@file' }))
    .pipe(gulpIf(isProduction, htmlmin({ collapseWhitespace: true })))
    .pipe(gulp.dest(distHTML));
}

export default html;
