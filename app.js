// import libraries
var express = require('express'),
    ejs     = require('ejs'),
    bodyParser = require('body-parser');

// import routes
var routes = require('./controller/index');
var aboutus_routes = require('./controller/aboutus');
var movie_route  = require('./controller/movie');
var friends_route  = require('./controller/friends');
var profile_route  = require('./controller/profile');
var show_route  = require('./controller/show');
var movieviewer_route  = require('./controller/movieviewer');
var tvviewer_route  = require('./controller/tvviewer');

// initialize express web application framework
// http://expressjs.com/
var app = express();

// allow json data to be parsed
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//configure template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// example of a global variable that can be passed to a template
app.set('subtitle', 'The Loop');

//configure routes
app.use('/', routes);
app.use('/aboutus', aboutus_routes);
app.use('/movie', movie_route);
app.use('/friends', friends_route);
app.use('/profile', profile_route);
app.use('/show', show_route);
app.use('/movieviewer', movieviewer_route);
app.use('/tvviewer', tvviewer_route);

// configure static directory for javascript, css, etc.
app.use(express.static('public'));

app.set('port', 8010);  //use your own port
app.listen(app.get('port'));
console.log("Express server listening on port", app.get('port'));