define(['app'], function (app) {

    'use strict';
    
    app.controller('EventsListCtrl',['$scope', '$interval', 'events', 'config', function (scope, interval, events, config) {
        
        scope.getData = function () {
            events.list(function (events) {
                scope.events = events;
            });
        };

        scope.getData();
        
        interval.cancel(config.eventsInterval);
        config.eventsInterval = interval(scope.getData, config.refreshTime);

    }]);

});