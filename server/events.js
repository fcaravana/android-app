var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');

var events = function () {

    /**
     * Self, for public properties and methods.
     */
    var self = {};

    /**
     * Private properties, start with _{name}.
     */
    var _req = null;
    var _res = null;

    var _scopes = ['https://www.googleapis.com/auth/calendar.readonly'];
    
    var _tokenDir = 'calendar/credentials/';
    var _tokenPath = _tokenDir + 'calendar-nodejs-quickstart.json';

    var clientSecretDir = 'calendar/client_secret/';
    var _secretPath = clientSecretDir + 'client_secret.json';

    var _oauth2Client = null;

    /**
     * Start, sets response and request.
     * 
     * @param {type} req
     * @param {type} res
     * @returns {undefined}
     */
    self.start = function (req, res) {

        _req = req;
        _res = res;

    };

    /**
     * List last 10 events.
     * 
     * @returns {undefined}
     */
    self.list = function () {

        _credentials();
        _authorize(_listEvents);

    };

    /* Save token to json file.
     * 
     * @returns {undefined}
     */
    self.saveToken = function () {

        _credentials();

        var code = _req.query.code ? _req.query.code : null;
        
        _oauth2Client.getToken(code, function (err, token) {
            if (err) {
                _send({
                    status: 'error',
                    data: '',
                    message: 'Error while trying to retrieve access token: ' + err
                });
            } else {
                _oauth2Client.credentials = token;
                _storeToken(token);
                
                _send({
                    status: 'success',
                    data: '',
                    message: 'Token saved.'
                });
            }
        });

    };

    /**
     * Load client secrets from a local file.
     * 
     * @returns {undefined}
     */
    var _credentials = function () {

        var credentials = JSON.parse(fs.readFileSync(_secretPath));

        var clientSecret = credentials.web.client_secret;
        var clientId = credentials.web.client_id;
        var redirectUrl = credentials.web.redirect_uris[0];
        var auth = new googleAuth();

        _oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

        return credentials;

    };

    /**
     * Create an OAuth2 client with the given credentials, and then execute the
     * given callback function.
     *
     * @param {function} callback The callback to call with the authorized client.
     */
    var _authorize = function (callback) {

        var oauth2Client = _oauth2Client;

        // check if we have previously stored a token.
        fs.readFile(_tokenPath, function (err, token) {
            if (err) {
                _getNewToken(oauth2Client, callback);
            } else {
                oauth2Client.credentials = JSON.parse(token);
                callback(oauth2Client);
            }
        });

    };

    /**
     * Ask for user authorization.
     *
     * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
     */
    var _getNewToken = function (oauth2Client) {

        var authUrl = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            approval_prompt: 'force',
            scope: _scopes
        });
        
        var fullUrl = _req.protocol + '://' + _req.get('host') + '/code/{urlencode({code})}';
        
        _send({
            status: 'error',
            data: '',
            message: 'Authorize this app by visiting this url: ' + authUrl + ', and enter the code from that page in this url: ' + fullUrl
        });
    };

    /**
     * Store token to disk be used in later program executions.
     *
     * @param {Object} token The token to store to disk.
     */
    var _storeToken = function (token) {

        try {
            fs.mkdirSync(_tokenDir);
        } catch (err) {
            if (err.code !== 'EEXIST') {
                throw err;
            }
        }

        fs.writeFile(_tokenPath, JSON.stringify(token));

    };

    /**
     * Lists the next 10 events on the user's primary calendar.
     *
     * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
     */
    var _listEvents = function (auth) {
        
        var calendar = google.calendar('v3');
        calendar.events.list({
            auth: auth,
            calendarId: 'primary',
            timeMin: (new Date()).toISOString(),
            maxResults: 3,
            singleEvents: true,
            orderBy: 'startTime'
        }, function (err, response) {

            if (err) {
                _send({
                    status: 'error',
                    data: '',
                    message: 'The API returned an error: ' + err
                });
                return;
            }

            var events = JSON.stringify({
                status: "success",
                data: response.items,
                message: ""
            });
            
            _send(events);
        });

    };

    /**
     * Send output to client. 
     * 
     * @param {data} data json data format.
     */
    var _send = function(data) {

        _res.send(data);
        
    };
    
    return self;

};

module.exports = events;
