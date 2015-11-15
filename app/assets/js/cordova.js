'use strict';

var CordovaInit = function () {

    // cordova onDeviceReady
    var onDeviceReady = function () {
        receivedEvent('deviceready');
    };

    // cordova and browser receivedEvent
    var receivedEvent = function (event) {
        console.log('Start event received, bootstrapping application setup.');
        angular.bootstrap(document, ['calendarApp']);
    };

    // cordova bindEvents
    this.bindEvents = function () {
        document.addEventListener('deviceready', onDeviceReady, false);
        document.addEventListener("backbutton", exitFromApp, false);
        document.addEventListener("offline", onOffline, false);
        document.addEventListener("online", onOnline, false);
    };

    // cordova exitFromApp
    var exitFromApp = function (event) {
        event.preventDefault();
        navigator.app.exitApp();
    };

    // cordova onOffline
    var onOffline = function () {
        $('.no-internet').fadeIn(function () {
            $('.dashboard').css('display', 'none');
        });
    };

    // cordova onOnline
    var onOnline = function () {
        $('.no-internet').fadeOut(function () {
            location.reload(true);
        });
    };

    // if cordova is present, wait for it to initialize,
    // otherwise just try to bootstrap the application.
    if (window.cordova !== undefined) {
        console.log('Cordova found, wating for device.');
        this.bindEvents();
    } else {
        console.log('Cordova not found, booting application');
        receivedEvent('manual');
    }

};