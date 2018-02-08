const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const usemin = require('gulp-usemin');
const rev = require('gulp-rev');

gulp.task('optimizeImages', ['clean:dist'], () =>
  gulp
    .src([
      './src/images/**/*',
      '!./src/images/icons',
      '!./src/images/icons/**/*',
    ])
    .pipe(imagemin({
      interlaced: true,
      multipass: true,
      progressive: true,
    }))
    .pipe(gulp.dest('./dist/images')));

gulp.task('useminTrigger', ['clean:dist'], () => {
  gulp.start('usemin');
});

gulp.task('usemin', ['pugToHTML', 'styles', 'scripts:dist'], () =>
  gulp
    .src('./src/temp/*.html')
    .pipe(usemin({
      css: [() => rev(), () => cleanCSS()],
      html: [() => htmlmin({ collapseWhitespace: true })],
      js: [() => rev()],
    }))
    .pipe(gulp.dest('./dist')));

gulp.task('build:dist', [
  'clean:dist',
  'copy:general',
  'optimizeImages',
  'useminTrigger',
]);
