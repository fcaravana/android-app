# Android Google Calendar App

### Demo

* http://gcalendar-caravana.rhcloud.com/app/

### Install node modules

```sh
$ cd server
$ npm install
```

### Install bower libraries (optional)

```sh
$ cd app/assets/js/
$ bower install
```

### Create a symbolic link app on server folder to ../app folder

```sh
$ cd server
$ ln -s ../app/ app
```

### The 'server' folder has http running on port 8080, with the available routes on express.js:

```sh
$ cd server
$ node server.js or nodemon server.js
```

* [server_name:port]/app

* [server_name:port]/events

* [server_name:port]/code/:code

### The 'app' folder has the html5 builded with angular and cordova:

* /assets/css has all the css styles

* /assets/images has all the images

* /assets/js has all the javascript

* /assets/scss has all SASS files used to build de /assets/css/style.css file

* index.html it's where all starts

### Configure where to get /events from google calendar:

* Edit: /assets/js/app.js

* Change: var EVENTS_SERVICE = 'http://[server_name:port]/events';

### The 'cordova' folder:

```sh
$ npm install cordova -g
$ cordova create project_name com.domain.project_name project_name
$ cd project_name
$ cordova platform add android
$ cordova plugin add com.lampa.startapp
$ cd ../
$ cp cordova/config.xml project_name/config.xml
$ rm -rf cordova
$ mv project_name cordova
$ cd cordova
$ rm -rf www
$ ln -s ../app/ www
$ cordova build android
```