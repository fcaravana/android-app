define(['app'], function (app) {

    'use strict';
    
    app.controller('EventsListCtrl',['$scope', '$interval', 'events', function (scope, interval, events) {
        
        scope.getData = function () {
            events.list(function (events) {
                scope.events = events;
            });
        };

        scope.getData();
        
        interval.cancel(EVENTS_INTERVAL);
        EVENTS_INTERVAL = interval(scope.getData, REFRESH_TIME);

    }]);

});