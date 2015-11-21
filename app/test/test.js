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

    describe('App filters', function () {

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

    });
});