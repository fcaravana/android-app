require.config({
    baseUrl: 'assets/js/',
    paths: {
        'jquery': 'libs/jquery.min',
        'bootstrap': 'libs/bootstrap.min',
        'angular': 'libs/angular.min',
        'angular-route': 'libs/angular-route.min',
        'angular-clock': 'libs/angular-clock.min',
        'events-list-ctrl': 'app/components/events-list/events-list-ctrl',
        'events-list-factory': 'app/components/events-list/events-list-factory',
        'event-detail-ctrl': 'app/components/event-detail/event-detail-ctrl',
        'launcher-ctrl': 'app/shared/launcher/launcher-ctrl',
        'loading-directive': 'app/shared/loader/loading-directive',
        'change-color-directive': 'app/shared/color/change-color-directive',
        'filters': 'app/shared/filters/filters',
        'error-ctrl': 'app/shared/error/error-ctrl'
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
        'app': {
            deps: ['jquery', 'bootstrap', 'angular']
        },
        'cordova': {
            deps: ['jquery', 'bootstrap', 'angular']
        }
    }
});

require([
    'jquery',
    'bootstrap',
    'angular',
    'angular-route',
    'angular-clock',
    'app',
    'cordova',
    'events-list-factory',
    'events-list-ctrl',
    'event-detail-ctrl',
    'launcher-ctrl',
    'loading-directive',
    'change-color-directive',
    'filters',
    'error-ctrl'
], function () {
    
    console.log('Bootstrapping!');
    new CordovaInit();
    
});
