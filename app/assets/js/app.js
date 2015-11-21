/**
 * Angular.
 */
define(function () {

    'use strict';

    /* module */
    var app = angular.module('calendarApp', ['ngRoute', 'ds.clock']);

    /* config */
    app.constant('config', {
        eventsService: (window.cordova === undefined ? 'http://localhost:8080/events' : 'http://gcalendar-caravana.rhcloud.com/events'),
        refreshTime: (window.cordova === undefined ? 4000 : 2000),
        eventsInterval: null
    });

    /* routes */
    app.config(['$routeProvider', function (routeProvider) {
        routeProvider.
                when('/events', {
                    templateUrl: 'assets/js/app/components/events-list/events-list.html',
                    controller: 'EventsListCtrl'
                }).
                when('/event/:id', {
                    templateUrl: 'assets/js/app/components/event-detail/event-detail.html',
                    controller: 'EventDetailCtrl'
                }).
                when('/error/:message', {
                    templateUrl: 'assets/js/app/shared/error/error.html',
                    controller: 'ErrorCtrl'
                }).
                otherwise({
                    redirectTo: '/events'
                });
    }]);

    return app;

});