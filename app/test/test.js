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

    /* test controllers */
    describe('EventDetailCtrl', function () {

        var scope, controller;
        beforeEach(function () {
            module('calendarApp');
        });

        describe('scope.event', function () {

            'use strict';

            beforeEach(inject(function (_$rootScope_, _$controller_) {

                var event = {"kind": "calendar#event", "etag": "\"2895943534938000\"", "id": "l0e3a90gt95dckr9abt7oelcak", "status": "confirmed", "htmlLink": "https://www.google.com/calendar/event?eid=bDBlM2E5MGd0OTVkY2tyOWFidDdvZWxjYWsgZmNhcmF2YW5hLm1lZXRpbmdzQG0", "created": "2015-11-13T17:31:08.000Z", "updated": "2015-11-19T22:22:47.469Z", "summary": "Meeting III", "location": "Porto", "creator": {"email": "fcaravana.meetings@gmail.com", "self": true}, "organizer": {"email": "fcaravana.meetings@gmail.com", "self": true}, "start": {"dateTime": "2015-11-25T12:00:00Z"}, "end": {"dateTime": "2015-11-25T13:00:00Z"}, "iCalUID": "l0e3a90gt95dckr9abt7oelcak@google.com", "sequence": 8, "reminders": {"useDefault": true}};
                var events = {find: function (id, callback) {
                        callback(event);
                    }};

                scope = _$rootScope_.$new();

                controller = _$controller_('EventDetailCtrl', {
                    '$scope': scope,
                    '$routeParams': {id: 'l0e3a90gt95dckr9abt7oelcak@google.com'},
                    'events': events
                });

            }));

            it('iCalUID', function () {
                expect(scope.event.iCalUID).toEqual('l0e3a90gt95dckr9abt7oelcak@google.com');
            });

            it('summary', function () {
                expect(scope.event.summary).toEqual('Meeting III');
            });

            it('location', function () {
                expect(scope.event.location).toEqual('Porto');
            });
        });
    });

    /* test filters */
    describe('Filters', function () {

        'use strict';

        var $filter;

        beforeEach(function () {
            module('calendarApp');

            inject(function (_$filter_) {
                $filter = _$filter_;
            });
        });

        it('cut', function () {
            var text = 'Event number 1.', result;
            result = $filter('cut')(text, false, 9, ' ...');

            expect(result).toEqual('Event num ...');
        });

        it('escape', function () {

            var text = 'fcaravana@gmail.com', result;
            result = $filter('escape')(text);

            expect(result).toEqual('fcaravana%40gmail.com');
        });
    });
});