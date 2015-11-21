# Android Google Calendar App

Android app that is listening and reacts to a node.js service connected to google calendar api that gets the next three events from the current date of the account fcaravana.meetings@gmail.com. 

This app also has three shortcuts to launch three android apps.

### Online demo:

* http://gcalendar-caravana.rhcloud.com/app/

### Android APK file:

* Go to https://github.com/fcaravana/android-app/tree/master/apk

### Install node modules:

```sh
$ cd server
$ npm install
```

### Install bower libraries (optional, for tests):

```sh
$ cd app/assets/js/
$ bower install
```

### Create a symbolic link app on server folder to ../app folder:

```sh
$ cd server
$ ln -s ../app/ app
```

### The 'server' folder has a node.js http server running on port 8080, with the following available routes:

#### Run service on development machine

```sh
$ npm install nodemon -g
$ cd server
$ nodemon server.js
```

#### Express.js routes

* http://server_name:port/app

* http://server_name:port/events

* http://server_name:port/code?code={CODE}

### The 'app' folder has the html5 builded with angular and cordova:

* /assets/css has all the css styles

* /assets/images has all the images

* /assets/js has all the javascript

* /assets/scss has all SASS files used to build de /assets/css/style.css file

* index.html it's where all starts

* /test for tests execute:

```sh
$ cd app
$ npm install 
$ npm install karma-cli -g
$ karma start
```

### Configure where to get the events from google calendar:

* Edit: /assets/js/app.js

* Change: config.eventsService = 'http://server_name:port/events';

* Currently, for the *.apk, the service is running in openshift http://gcalendar-caravana.rhcloud.com/events

### Installing the Android SDK

* Got to http://developer.android.com/intl/pt-br/sdk/installing/index.html and follow instructions.

### The 'cordova' folder for build the APK file:

```sh

$ npm install cordova -g

$ cordova create project_name com.domain.project_name project_name

$ cd project_name

$ cordova platform add android

$ cordova plugin add com.lampa.startapp

$ cordova plugin add cordova-plugin-network-information

$ cd ../

$ cp cordova/config.xml project_name/config.xml

$ rm -rf cordova

$ mv project_name cordova

$ cd cordova

$ rm -rf www

$ ln -s ../app/ www

$ cordova build android

```

### Good luck, may the "source" be with you, always.