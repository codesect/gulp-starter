const gulp = require('gulp');
const pug = require('gulp-pug');
const locals = require('../src/data/locals.json');

gulp.task('pugToHTML', () =>
  gulp
    .src('./src/pug/[^_]*.pug')
    .pipe(pug({
      pretty: true,
      locals,
    }))
    .on('error', (err) => {
      // eslint-disable-next-line no-console
      console.error(err.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./src/temp')));
