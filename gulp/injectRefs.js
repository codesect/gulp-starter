import gulp from 'gulp';
import inject from 'gulp-inject';
import { distCSS, distDir, distHTML, distJS } from './config';

function injectRefs() {
  const target = gulp.src(`${distHTML}**/*.html`);
  const sources = gulp.src([`${distJS}/*.js`, `${distCSS}/*.css`], {
    read: false,
  });

  return target
    .pipe(
      inject(sources, {
        relative: true,
        removeTags: true,
      }),
    )
    .pipe(gulp.dest(distDir));
}

export default injectRefs;
