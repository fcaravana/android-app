define(['angular', 'angular-route', 'angular-clock', 'angular-mocks', 'app', 'filters'], function () {

    /**
     * Filters.
     */
    describe('Filters', function () {

        'use strict';

        var $filter;

        beforeEach(function () {
            module('calendarApp');

            inject(function (_$filter_) {
                $filter = _$filter_;
            });
        });

        /**
         * Cut.
         */
        it('cut', function () {
            var text = 'Event number 1.', result;
            result = $filter('cut')(text, false, 9, ' ...');

            expect(result).toEqual('Event num ...');
        });

        /**
         * Escape.
         */
        it('escape', function () {

            var text = 'fcaravana@gmail.com', result;
            result = $filter('escape')(text);

            expect(result).toEqual('fcaravana%40gmail.com');
        });
    });

});