var gulp = require('gulp');
var del = require('del');
var rename = require('gulp-rename');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sassLint = require('gulp-sass-lint');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var jade = require('gulp-jade');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

var options = {
  src: {
    jade: ['./src/jade/**/*.jade', '!src/jade/**/layout.jade'],
    js: './src/js/**/*.js',
    sass: './src/sass/*.sass'
  },
  dest: {
    html: './dist/',
    js: './dist/js',
    css: './dist/css'
  },
  filesToCopy: [
    {
      src: './src/images/**/*.*',
      dest: './dist/images'
    },
    {
      src: './src/fonts/**/*.*',
      dest: './dist/fonts'
    }
  ],
  autoprefixer: 'last 2 versions'
};

var cleanFolders = [ 'dist' ];

gulp.task('clean', function () {
  return del(cleanFolders);
});

gulp.task('build:html', function() {
  return gulp.src(options.src.jade)
  .pipe(jade({pretty: true}))
  .pipe(gulp.dest(options.dest.html))
  .pipe(reload({stream: true}));
});

gulp.task('build:html:min', function() {
  return gulp.src(options.src.jade)
  .pipe(jade())
  .pipe(gulp.dest(options.dest.html))
  .pipe(reload({stream: true}));
});

gulp.task('build:js', function() {
  return gulp.src(options.src.js)
  .pipe(babel())
  .pipe(gulp.dest(options.dest.js))
  .pipe(reload({stream: true}));
});

gulp.task('build:js:min', function() {
  return gulp.src(options.src.js)
  .pipe(babel())
  .pipe(rename({suffix: '.min'}))
  .pipe(uglify())
  .pipe(gulp.dest(options.dest.js))
  .pipe(reload({stream: true}));
});

gulp.task('build:css', function() {
  return gulp.src(options.src.sass)
  .pipe(sassLint())
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
  .pipe(sass({outputStyle: 'expanded'})
  .on('error', sass.logError))
  .pipe(autoprefixer(options.autoprefixer))
  .pipe(gulp.dest(options.dest.css))
  .pipe(reload({stream: true}));
});

gulp.task('build:css:min', function() {
  return gulp.src(options.src.sass)
  .pipe(sassLint())
  .pipe(sassLint.format())
  .pipe(sassLint.failOnError())
  .pipe(sass({outputStyle: 'compressed'})
  .on('error', sass.logError))
  .pipe(autoprefixer(options.autoprefixer))
  .pipe(rename({suffix: '.min'}))
  .pipe(cleanCSS({debug: true}, function(details) {
    console.log(details.name + ': ' + details.stats.originalSize);
    console.log(details.name, ': ', details.stats.minifiedSize);
  }))
  .pipe(gulp.dest(options.dest.css))
  .pipe(reload({stream: true}));
});

gulp.task('copy', function() {
  options.filesToCopy.forEach(function(file) {
    gulp.src(file.src)
    .pipe(gulp.dest(file.dest));
  });
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: options.dest.html
    }
  });
});

gulp.task('watch', function() {
  gulp.watch(options.src.js, ['build:js']);
  gulp.watch(options.src.sass, ['build:css']);
  gulp.watch(options.src.jade, ['build:html']);
});

gulp.task('default', ['copy', 'build:html', 'build:js', 'build:css', 'browser-sync', 'watch']);
gulp.task('build', ['default']);
gulp.task('build:min', ['copy', 'build:html:min', 'build:js:min', 'build:css:min']);
gulp.task('build:clean', ['clean', 'default']);
// @todo: add Mocha tests
// gulp.task('build:test', ['test', 'default']);
