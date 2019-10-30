import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';

import { distImages, srcImages } from './config';

function images() {
  return gulp
    .src(srcImages, { since: gulp.lastRun(images) })
    .pipe(
      imagemin(
        [
          imagemin.gifsicle({ optimizationLevel: 3 }),
          imageminMozjpeg({ quality: 55, progressive: true }),
          imagemin.optipng({ optimizationLevel: 5 }),
          imagemin.svgo({
            plugins: [{ cleanupIDs: true }],
          }),
        ],
        { verbose: true },
      ),
    )
    .pipe(gulp.dest(distImages));
}

export default images;
