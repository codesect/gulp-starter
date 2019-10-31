import browserSync from 'browser-sync';
import gulp from 'gulp';

import a11y from './gulp/a11y';
import clean from './gulp/clean';
import html from './gulp/html';
import images from './gulp/images';
import scripts from './gulp/scripts';
import styles from './gulp/styles';
import injectRefs from './gulp/injectRefs';
import {
  distCSS,
  distDir,
  distImages,
  openBrowser,
  port,
  srcHTMLWatch,
  srcImages,
  srcJS,
  srcSass,
} from './gulp/config';

const server = browserSync.create();

function serve() {
  server.init({
    notify: false,
    open: openBrowser,
    port,
    server: {
      baseDir: distDir,
    },
  });
}

function reload(done) {
  server.reload();
  done();
}

function cssInject(done) {
  gulp.src(`${distCSS}/*.css`).pipe(server.stream());
  done();
}

function imageInject(done) {
  gulp.src(`${distImages}/*.*`).pipe(server.stream());
  done();
}

function watchFiles() {
  gulp.watch(srcSass, gulp.series(styles, cssInject));
  gulp.watch(srcImages, gulp.series(images, imageInject));
  gulp.watch(srcJS, gulp.series(scripts, reload));
  gulp.watch(srcHTMLWatch, gulp.series(html, injectRefs, reload));
}

gulp.task(
  'build',
  gulp.series(clean, gulp.series(scripts, styles, html, images, injectRefs)),
);
gulp.task('a11y', gulp.series('build', a11y));
gulp.task('default', gulp.series('build', gulp.parallel(serve, watchFiles)));
