const gulp = require('gulp');

gulp.task('copy:images', () =>
  gulp
    .src('./src/images/**/*.{gif,jpg,jpeg,png,svg}')
    .pipe(gulp.dest('./src/temp/images/')));

gulp.task('copy:general', ['clean:dist'], () =>
  gulp
    .src([
      './src/**/*',
      '!./src/data',
      '!./src/data/**',
      '!./src/images',
      '!./src/images/**',
      '!./src/pug',
      '!./src/pug/**',
      '!./src/scripts',
      '!./src/scripts/**',
      '!./src/styles',
      '!./src/styles/**',
      '!./src/temp',
      '!./src/temp/**',
    ])
    .pipe(gulp.dest('./dist')));
