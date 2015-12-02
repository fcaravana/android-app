define(['app'], function (app) {

    'use strict';

    app.service('events', ['$http', '$location', 'config', function (http, location, config) {

        var loadedEvents = null;

        var errorWithoutAccess = function (response) {
            location.path("/error/" + "Without api access!");
        };

        var getData = function (callback) {
            http({
                method: 'GET',
                url: config.eventsService,
                cache: false
            }).success(function (events) {
                loadedEvents = events.data;
                callback(loadedEvents);
            }).error(errorWithoutAccess);
        };

        var findElement = function (id, events) {
            return events.filter(function (entry) {
                return entry.iCalUID === id;
            })[0];
        };

        var getElement = function (id, events, callback) {
            var event = findElement(id, events);
            callback(event);
        };

        var findData = function (id, callback) {
            if (loadedEvents) {
                getElement(id, loadedEvents, callback);
            } else {
                getData(function (data) {
                    getElement(id, data, callback);
                });
            }
        };

        var result = {list: getData, find: findData};

        return result;

    }]);

});