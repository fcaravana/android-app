define(['app'], function (app) {

    'use strict';

    app.factory('events', ['$http', '$location', function (http, location) {

        var loadedEvents = null;

        function getData(callback) {

            http({
                method: 'GET',
                url: EVENTS_SERVICE,
                cache: false
            }).success(function (events) {
                loadedEvents = events.data;
                callback(loadedEvents);
            }).error(function (response) {
                location.path("/error/" + "Without api access!");
            });
        }

        return {
            list: getData,
            find: function (id, callback) {
                if (loadedEvents) {
                    var event = loadedEvents.filter(function (entry) {
                        return entry.iCalUID === id;
                    })[0];
                    callback(event);
                } else {
                    getData(function (data) {
                        var event = data.filter(function (entry) {
                            return entry.iCalUID === id;
                        })[0];
                        callback(event);
                    });
                }
            }
        };

    }]);

});