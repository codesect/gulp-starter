import gulp from 'gulp';
import inject from 'gulp-inject';

function injectRefs() {
  const target = gulp.src('./dist/**/*.html');
  const sources = gulp.src(['./dist/js/*.js', './dist/css/*.css'], {
    read: false,
  });

  return target
    .pipe(
      inject(sources, {
        relative: true,
        removeTags: true,
      }),
    )
    .pipe(gulp.dest('./dist'));
}

export default injectRefs;
