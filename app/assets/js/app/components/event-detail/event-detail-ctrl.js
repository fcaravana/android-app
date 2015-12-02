define(['app'], function (app) {

    'use strict';

    app.controller('EventDetailCtrl', ['$scope', '$routeParams', 'events', function (scope, routeParams, events) {

        scope.setEvent = function (event) {
            scope.event = event;
            scope.eventId = routeParams.id;
        };

        events.find(routeParams.id, scope.setEvent);

    }]);

});