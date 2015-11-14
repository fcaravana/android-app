define(['app'], function (app) {

    'use strict';

    app.controller('ErrorCtrl', ['$scope', '$routeParams', function (scope, routeParams) {
        scope.message = routeParams.message;
    }]);

});