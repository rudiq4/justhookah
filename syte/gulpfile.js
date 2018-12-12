var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync');


gulp.task('sass', function(){
   return gulp.src(['static/sass/**/*.sass', 'static/sass/**/*scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('static/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('min', function(){
gulp.src('static/css/*.css')
    .pipe(minCSS())
    .pipe(gulp.dest('static/css/minCSS'))
});

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'temlates'
    },
  });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('static/sass/**/*.sass', ['sass']);
  gulp.watch('static/js/**/*.js', browserSync.reload);
  gulp.watch('temlates/**/*.html', browserSync.reload);
});