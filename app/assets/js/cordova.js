'use strict';

var CordovaInit = function () {

    // cordova onDeviceReady
    var onDeviceReady = function () {
        receivedEvent('deviceready');
    };

    // common for cordova and browser
    var receivedEvent = function (event) {
        console.log('Start event received, bootstrapping application setup.');
        angular.bootstrap(document, ['calendarApp']);
    };

    // cordova bindEvents
    this.bindEvents = function () {
        document.addEventListener('deviceready', onDeviceReady, false);
        document.addEventListener("backbutton", exitFromApp, false);
    };

    // cordova exitFromApp
    var exitFromApp = function (event) {
        event.preventDefault();
        navigator.app.exitApp();
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