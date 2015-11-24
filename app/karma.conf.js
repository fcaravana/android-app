module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', 'requirejs'],
        files: [
            {pattern: 'assets/js/libs/**/*.js', included: false},
            {pattern: 'assets/js/bower_components/angular-mocks/**/*.js', included: false},
            {pattern: 'assets/js/app/**/*.js', included: false},
            {pattern: 'assets/js/cordova.js', included: false},
            {pattern: 'assets/js/app.js', included: false},
            {pattern: 'test/**/*.js', included: false},
            'test/test-main.js'
        ],
        exclude: [
            'assets/**/*.swp',
            'assets/js/main.js',
            'assets/js/app/**/*.html'
        ],
        preprocessors: {
        },
        reporters: ['progress', 'html'],
        htmlReporter: {
            outputFile: 'test/units.html',
            pageTitle: 'Unit Tests',
            subPageTitle: 'Get next three events from google calendar.'
        },
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: [],
        singleRun: false,
        concurrency: Infinity
    });
};