var express = require('express');
var app = express();
var http = require('http').Server(app);
var router = express.Router(); // on deck
// Templating library adapter for Express.  Do I still need this?
var cons = require('consolidate'); 
// favicon icon
var favicon = require('serve-favicon');
// chat
var io = require('socket.io')(http); 
var config = require('config');
// database
var pg = require('pg'); 
// security
var helmet = require('helmet'); 



// Security 
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



// Views set up w/ ejs
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



// Setting up server
app.set('port', (process.env.PORT || 5000));
//app.set('port', (3000)); //for my own future reference



// Database - variable name set for database to be called when moviereviews.ejs page is viewed.
var moviesdatabase = require('./moviesdatabase');
app.use('/moviereviews', moviesdatabase);



// Site Pages
app.get('/', function(request, response) {
  response.render('pages/index');
});
// about moi
app.get('/aboutme', function(request, response) {
  response.render('pages/aboutme');
});
// about making the site
app.get('/makingsite', function(request, response) {
  response.render('pages/makingsite');
});
// chat page - socket.io
app.get('/chat', function(request, response) {
  response.render('pages/chat');
});
// movie review database page
app.get('/moviereviews', function(request, response) {
  response.render('pages/moviereviews');
});
// practice animation page
app.get('/animations', function(request, response) {
  response.render('pages/animations');
});
// practice animation page
app.get('/animations2', function(request, response) {
  response.render('pages/animations2');
});
// practice animation page
app.get('/animations3', function(request, response) {
  response.render('pages/animations3');
});
// practice animation page
app.get('/animations4', function(request, response) {
  response.render('pages/animations4');
});
// practice animation page
app.get('/animations5', function(request, response) {
  response.render('pages/animations5');
});




// Chatroom via socket.io ... future plans --> move to seperate file
var numUsers = 0;

io.on('connection', function (socket) {
  var addedUser = false;

  // when the client emits 'new message', this listens and executes
  socket.on('new message', function (data) {
    // we tell the client to execute 'new message'
    socket.broadcast.emit('new message', {
      username: socket.username,
      message: data
    });
  });

  // when the client emits 'add user', this listens and executes
  socket.on('add user', function (username) {
    if (addedUser) return;

    // we store the username in the socket session for this client
    socket.username = username;
    ++numUsers;
    addedUser = true;
    socket.emit('login', {
      numUsers: numUsers
    });
	
    // echo globally (all clients) that a person has connected
    socket.broadcast.emit('user joined', {
      username: socket.username,
      numUsers: numUsers
    });
  });

  // when the client emits 'typing', we broadcast it to others
  socket.on('typing', function () {
    socket.broadcast.emit('typing', {
      username: socket.username
    });
  });

  // when the client emits 'stop typing', we broadcast it to others
  socket.on('stop typing', function () {
    socket.broadcast.emit('stop typing', {
      username: socket.username
    });
  });

  // when the user disconnects.. perform this
  socket.on('disconnect', function () {
    if (addedUser) {
      --numUsers;

      // echo globally that this client has left
      socket.broadcast.emit('user left', {
        username: socket.username,
        numUsers: numUsers
      });
    }
  });
});



// err 404 --> no pg found
app.use(function(req, res, next) {
    var err = new Error('Not found.  Please try another url.');
    err.status = 404;
    next(err);
});



//Automatically verify in logging that server is listening.
http.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


