const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const watch = require('gulp-watch');

function convertSassToCss() {
  return gulp.src('src/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/css'));
}

function compressJS() {
  return gulp.src('src/*.js')
    .pipe(terser())
    .pipe(gulp.dest('build/js'));
}

function compressImages() {
  return gulp.src('src/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/images'));
}

gulp.task('sass', convertSassToCss);
gulp.task('js', compressJS);
gulp.task('images', compressImages);

gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', gulp.series('sass'));
  gulp.watch('src/**/*.js', gulp.series('js'));
  gulp.watch('src/images/*', gulp.series('images'));
});

gulp.task('default', gulp.parallel('sass', 'js', 'images', 'watch'));

exports.imagens = compressImages