/**
 * Global vars.
 */
var EVENTS_SERVICE = 'http://gcalendar-caravana.rhcloud.com/events';
var REFRESH_TIME = 2000;
var EVENTS_INTERVAL = null;

define(function () {

    'use strict';

    /* module */
    var app = angular.module('calendarApp', [
        'ngRoute',
        'ds.clock'
    ]);

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