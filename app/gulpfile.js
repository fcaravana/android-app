var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');

gulp.task('copy-js', function () {
    gulp.src([
        './assets/js/bower_components/bootstrap/dist/js/bootstrap.min.js',
        './assets/js/bower_components/jquery/dist/jquery.min.js',
        './assets/js/bower_components/angular/angular.min.js',
        './assets/js/bower_components/angular-route/angular-route.min.js',
        './assets/js/bower_components/angular-ui-clock/dist/angular-clock.min.js'

    ]).pipe(gulp.dest('./assets/js/libs/'));
});

gulp.task('uglify-js', function () {
    return gulp.src([
        './assets/js/bower_components/requirejs/require.js'
    ]).pipe(uglify())
    .pipe(rename('require.min.js'))
    .pipe(gulp.dest('./assets/js/libs/'));
});

gulp.task('copy-css', function () {
    gulp.src([
        './assets/js/bower_components/bootstrap/dist/css/bootstrap.min.css',
        './assets/js/bower_components/bootstrap/dist/css/bootstrap.css.map',
        './assets/js/bower_components/bootstrap/dist/css/bootstrap-theme.min.css',
        './assets/js/bower_components/bootstrap/dist/css/bootstrap-theme.css.map',
        './assets/js/bower_components/angular-ui-clock/dist/angular-clock.css.map'
    ]).pipe(gulp.dest('./assets/css/libs/'));
});

gulp.task('minify-css', function () {
    return gulp.src([
        './assets/js/bower_components/angular-ui-clock/dist/angular-clock.css'
    ]).pipe(minifyCss())
    .pipe(rename('angular-clock.min.css'))
    .pipe(gulp.dest('./assets/css/libs/'));
});

gulp.task('copy-fonts', function () {
    gulp.src([
        './assets/js/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot',
        './assets/js/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg',
        './assets/js/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf',
        './assets/js/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff',
        './assets/js/bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2'
    ]).pipe(gulp.dest('./assets/css/fonts/'));
});

gulp.task('default', ['uglify-js', 'copy-js', 'copy-css', 'minify-css', 'copy-fonts']);