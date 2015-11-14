define(['app'], function (app) {

    'use strict';

    app.controller('EventDetailCtrl', ['$scope', '$routeParams', 'events', function (scope, routeParams, events) {

        events.find(routeParams.id, function (event) {
            scope.event = event;
            scope.eventId = routeParams.id;
        });

    }]);

});