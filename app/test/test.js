define([
    'jquery',
    'bootstrap',
    'angular',
    'angular-route',
    'angular-clock',
    'angular-mocks',
    'app',
    'cordova',
    'events-list-factory',
    'events-list-ctrl',
    'event-detail-ctrl',
    'launcher-ctrl',
    'loading-directive',
    'change-color-directive',
    'filters',
    'error-ctrl'
], function () {

    new CordovaInit();

    describe('App custom filters', function () {

        'use strict';

        var $filter;

        beforeEach(function () {
            module('calendarApp');

            inject(function (_$filter_) {
                $filter = _$filter_;
            });
        });

        it('Test cut filter', function () {
            var text = 'Event number 1.', result;
            result = $filter('cut')(text, false, 9, ' ...');

            expect(result).toEqual('Event num ...');
        });

        it('Test escape filter', function () {
            
            var text = 'fcaravana@gmail.com', result;
            result = $filter('escape')(text);

            expect(result).toEqual('fcaravana%40gmail.com');
        });
    });
});