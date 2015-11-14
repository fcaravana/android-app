define(['app'], function (app) {

    'use strict';

    app.controller('LancherCtrl', ['$scope', function (scope) {

        scope.startApp = function (appName) {
            if (window.cordova !== undefined) {
                navigator.startApp.check(appName, function () {
                    navigator.startApp.start(appName);
                }, function () {
                    alert('The app: ' + appName + ', is not installed!');
                });
            } else {
                alert('With cordova run "' + appName.substring((appName.lastIndexOf('.') + 1), appName.length) + '"!');
            }
        };

    }]);

});