var express = require('express'),
    events = require('./events'),
    app = express();

app.get('/', function (req, res) {
    res.redirect('/app');
});

app.get('/events', function (req, res) {
    event = new events();
    event.start(req, res);
    event.list();
});

app.get('/code', function (req, res) {
    event = new events();
    event.start(req, res);
    event.saveToken();
});

app.use('/app', express.static('./app'));

var ipaddress = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var server = app.listen(port, ipaddress, function () {
    console.log('Listening at http://%s:%s', ipaddress, port);
});
