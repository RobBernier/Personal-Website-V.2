const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const rename = require('gulp-rename');

// Title used for system notifications
const notifyInfo = {
  title: 'Gulp',
};

// Error notification settings for plumber
const plumberErrorHandler = {
  errorHandler: notify.onError({
    title: notifyInfo.title,
    icon: notifyInfo.icon,
    message: 'Error: <%= error.message %>',
  }),
};

// CSS development task
function css() {
  return gulp
    .src('./scss/main.scss', { sourcemaps: true })
    .pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(
      postcss([
        autoprefixer({
          overrideBrowserslist: [
            '> 1%',
            'last 3 versions',
            'Firefox >= 20',
            'iOS >=7',
          ],
          grid: 'autoplace',
        }),
      ]),
    )
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./_dist/css/'));
}

function js() {
  const b = browserify({
    entries: './js/main.js',
    debug: true,
    transform: [
      babelify.configure({
        presets: ['@babel/preset-env'],
      }),
    ],
  });

  return b
    .bundle()
    .pipe(source('./js/main.js'))
    .pipe(plumber())
    .pipe(buffer())
    .pipe(rename({ dirname: '' }))
    .pipe(gulp.dest('./_dist/js/'));
}

// Watch files
function watchFiles() {
  gulp.watch('./scss/**/*', css);
  gulp.watch(
    ['./js/**/*.js'],
    js,
  );
}

// Watch files during development
const watch = gulp.parallel(watchFiles);

// Export tasks
exports.css = css;
exports.js = js;
exports.watch = watch;
exports.default = watch;