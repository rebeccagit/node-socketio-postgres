var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router(); 
var cons = require('consolidate'); 
var favicon = require('serve-favicon');
var io = require('socket.io')(http); 
var config = require('config');
var pg = require('pg'); 
var helmet = require('helmet'); 
app.disable('x-powered-by');
app.use(helmet());
app.use(helmet.noSniff());

 //for my own future reference ... still a wip
/*app.use(helmet.csp({
  // Specify directives as normal. 
  directives: {
    defaultSrc: ["'self'", 'default.com'],
    scriptSrc: ["'self'", "'unsafe-inline' www.google-analytics.com cdn.socket.io code.jquery.com netdna.bootstrapcdn.com"],
    styleSrc: ['self' "netdna.bootstrapcdn.com"],
	mediaSrc: ['self' "youtube.com"],
    imgSrc: ['img.com', 'self' "http://cdn.theanimalrescuesite.com"]
}}));  //pending... */

app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));
//app.use(express.static('public'));  //for my own future reference

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.set('port', (process.env.PORT || 5000));
//app.set('port', (3000)); //for my own future reference

var moviesdatabase = require('./views/pages/moviesdatabase');
app.use('/moviereviews', moviesdatabase);

// Site Pages
app.get('/', function(request, response) {
  response.render('pages/index');
});
app.get('/aboutme', function(request, response) {
  response.render('pages/aboutme');
});
app.get('/makingsite', function(request, response) {
  response.render('pages/makingsite');
});
app.get('/chat', function(request, response) {
  response.render('pages/chat');
});

// movie review database page
//app.get('/moviereviews', function(request, response) {
//  response.render('pages/moviereviews');
//});

app.get('/animations', function(request, response) {
  response.render('pages/animations/animations');
});
app.get('/animations2', function(request, response) {
  response.render('pages/animations/animations2');
});
app.get('/animations3', function(request, response) {
  response.render('pages/animations/animations3');
});
app.get('/animations4', function(request, response) {
  response.render('pages/animations/animations4');
});
app.get('/animations5', function(request, response) {
  response.render('pages/animations/animations5');
});
app.get('/animations6', function(request, response) {
  response.render('pages/animations/animations6');
});
app.get('/animations7', function(request, response) {
  response.render('pages/animations/animations7');
});
app.get('/animations8', function(request, response) {
  response.render('pages/animations/animations8');
});
app.get('/animations8b', function(request, response) {
  response.render('pages/animations/animations8b');
});
app.get('/animations10', function(request, response) {
  response.render('pages/animations/animations10');
});
app.get('/animations11', function(request, response) {
  response.render('pages/animations/animations11');
});
app.get('/animations12', function(request, response) {
  response.render('pages/animations/animations12');
});
app.get('/animations12b', function(request, response) {
  response.render('pages/animations/animations12b');
});
app.get('/animations13', function(request, response) {
  response.render('pages/animations/animations9');
});
app.get('/og7', function(request, response) {
  response.render('pages/animations/og7');
});
app.get('/og8', function(request, response) {
  response.render('pages/animations/og8');
});
app.get('/og9', function(request, response) {
  response.render('pages/animations/og9');
});
app.get('/experimental', function(request, response) {
  response.render('pages/animations/experimental');
});
app.get('/funstuff', function(request, response) {
  response.render('pages/funstuff');
});
app.get('/prac', function(request, response) {
  response.render('pages/prac');
});

// practice grid page
//app.get('/data.json', function(request, response) {
// response.render('myscripts\jgrid\js\data.json');
//});

// Chatroom
var numUsers = 0;

io.on('connection', function (socket) {
  var addedUser = false;
  socket.on('new message', function (data) {
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });
  socket.on('add user', function (username) {
    if (addedUser) return;
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });
  socket.on('disconnect', function () {
    if (addedUser) {
      --numUsers;
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});

app.use(function(req, res, next) {
    //var err = new Error('Not found.  Please try another url.');
    res.status(404).send('The page you\'re looking for does not exist! Please try another page.');
    next(err);
});

http.listen(app.get('port'), function() {
  console.log('Hiya, node is running on port ', app.get('port'));
});