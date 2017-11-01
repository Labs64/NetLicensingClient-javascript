var gulp = require('gulp'),
    gutil = require('gulp-util'),
    size = require('gulp-size'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    karma = require('karma'),
    karmaParseConfig = require('karma/lib/config').parseConfig;

function runKarma(configFilePath, options, cb) {

    configFilePath = path.resolve(configFilePath);

    var log = gutil.log, colors = gutil.colors;
    var config = karmaParseConfig(configFilePath, {});

    Object.keys(options).forEach(function (key) {
        config[key] = options[key];
    });

    var server = new karma.Server(config, function (exitCode) {
        log('Karma exited with ' + colors.red(exitCode));
        cb();
        process.exit(exitCode);
    });

    server.start();
}

// single run test
gulp.task('test', function (cb) {
    runKarma('karma.conf.js', {
        autoWatch: false,
        singleRun: true
    }, cb);
});

// using karma in watch mode
gulp.task('test-watch', function (cb) {
    runKarma('karma.conf.js', {
        autoWatch: true,
        singleRun: false
    }, cb);
});

gulp.task('travis-test', function (cb) {
    runKarma('karma.travis.conf.js', {
        autoWatch: false,
        singleRun: true
    }, cb);
});

// clean dist
gulp.task('clean', function () {
    return gulp.src(['dist/**/*.js'], {read: false})
        .pipe(clean());
});

// create distribution files
gulp.task('dist', function () {
    var src = [
        'src/util/*.js',
        'src/entities/*.js',
        'src/vo/*.js',
        'src/services/*.js',
        'src/exports.js'
    ];

    var js = gulp.src(src)
        .pipe(concat('netlicensing-client.js'))
        .pipe(size({
            title: 'The size of a library'
        }))
        .pipe(gulp.dest('dist'));

    var min = gulp.src(src)
        .pipe(concat('netlicensing-client.min.js'))
        .pipe(uglify())
        .pipe(size({
            title: 'The size of a minimized library'
        }))
        .pipe(gulp.dest('dist'));
});

// test & release distribution files
gulp.task('release', ['test', 'dist']);

