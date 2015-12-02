define(['app'], function (app) {

    'use strict';

    app.directive('myChangeColor', ['$http', function (http) {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs) {

                if (navigator.userAgent.toLowerCase().indexOf("android") > -1) {

                    $(".events, .shortcut, .back").bind("touchstart", function () {
                        $(this).removeClass('transparent-background').addClass('blue-background');
                    }).bind("touchend touchcancel", function () {
                        $(this).removeClass('blue-background').addClass('transparent-background');
                    });

                }
            }
        };
    }]);

});