const gulp = require('gulp'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      minifyCSS = require('gulp-minify-css'),
      concat = require('gulp-concat'),
      babel = require('gulp-babel'),
      browserSync = require('browser-sync'),
      reload = browserSync.reload;

gulp.task('browser-sync', () =>{
    const files =[
        '*.scss',
        '*.js',
        '*.php',
        '*.html'
      ];

    browserSync.init(files, {
        proxy:'valor.test',
        notify: false
    });
});

gulp.task('scss-task', () => {
    return gulp.src('./sass/*.scss').
            pipe(sass({
                outputStyle: 'compact',
                sourceComment: true
            })).
            pipe(autoprefixer()).
            pipe(concat('style.css')).
            pipe(minifyCSS()).
            pipe(reload({stream:true})).
            pipe(gulp.dest('./css'))
});

gulp.task('es6-task', () => {
    gulp.src('./js/*.js')
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('./js/js'))
});

gulp.task('watch', () => {
    gulp.watch('sass/*.scss', gulp.series('scss-task'));
    gulp.watch('js/*.js', gulp.series('es6-task'));
});

gulp.task('default', gulp.parallel('scss-task', 'browser-sync', 'es6-task', 'watch'));