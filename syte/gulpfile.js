var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minCSS = require('gulp-clean-css'),
    browserSync = require('browser-sync');


gulp.task('sass', function(){
   return gulp.src(['app/sass/**/*.sass', 'app/sass/**/*scss'])
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('min', function(){
gulp.src('app/css/*.css')
    .pipe(minCSS())
    .pipe(gulp.dest('app/css/minCSS'))
});

gulp.task('browser-sync', function(){
  browserSync({
    server: {
      baseDir: 'app'
    },
  });
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/**/*.html', browserSync.reload);
});