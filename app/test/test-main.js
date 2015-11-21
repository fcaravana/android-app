var TEST_REGEXP = /(spec|test)\.js$/i;
var allTestFiles = [];

Object.keys(window.__karma__.files).forEach(function (file) {
    if (TEST_REGEXP.test(file)) {
        var normalizedTestModule = file.replace(/^\/base\/|\.js$/g, '');
        allTestFiles.push(normalizedTestModule);
    }
});

require.config({
    baseUrl: '/base',
    paths: {
        'jquery': 'assets/js/libs/jquery.min',
        'bootstrap': 'assets/js/libs/bootstrap.min',
        'angular': 'assets/js/libs/angular.min',
        'angular-route': 'assets/js/libs/angular-route.min',
        'angular-clock': 'assets/js/libs/angular-clock.min',
        'angular-mocks': 'assets/js/bower_components/angular-mocks/angular-mocks',
        'app': 'assets/js/app',
        'cordova': 'assets/js/cordova',
        'events-list-ctrl': 'assets/js/app/components/events-list/events-list-ctrl',
        'events-list-factory': 'assets/js/app/components/events-list/events-list-factory',
        'event-detail-ctrl': 'assets/js/app/components/event-detail/event-detail-ctrl',
        'launcher-ctrl': 'assets/js/app/shared/launcher/launcher-ctrl',
        'loading-directive': 'assets/js/app/shared/loader/loading-directive',
        'change-color-directive': 'assets/js/app/shared/color/change-color-directive',
        'filters': 'assets/js/app/shared/filters/filters',
        'error-ctrl': 'assets/js/app/shared/error/error-ctrl'
    },
    shim: {
        bootstrap: {
            deps: ['jquery']
        },
        angular: {
            exports: 'angular',
            deps: ['jquery']
        },
        'angular-route': {
            deps: ['angular']
        },
        'angular-clock': {
            deps: ['angular']
        },
        'angular-local-storage': {
            deps: ['angular']
        },
        'angular-mocks': {
            deps: ['angular']
        },
        'app': {
            deps: ['jquery', 'bootstrap', 'angular']
        },
        'cordova': {
            deps: ['jquery', 'bootstrap', 'angular']
        }
    },
    // dynamically load all test files
    deps: allTestFiles,
    
    // we have to kickoff jasmine, as it is asynchronous
    callback: window.__karma__.start
});