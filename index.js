var express = require('express');
var app = express();

var cons = require('consolidate'); // Templating library adapter for Express
var helmet = require('helmet');

var favicon = require('serve-favicon');
var http = require('http').Server(app);

var io = require('socket.io')(http);
var config = require('config');

var pg = require('pg');
// var router = express.Router(); // on deck


// Security 
app.disable('x-powered-by');
app.use(helmet());

//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('port', (process.env.PORT || 5000));
//app.set('port', (3000));


// Database
var moviesdatabase = require('./moviesdatabase');
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

app.get('/moviereviews', function(request, response) {
  response.render('pages/moviereviews');
});


// Chatroom via socket.io
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



app.use(function(req, res, next) {
    var err = new Error('Not found.  Please try another url.');
    err.status = 404;
    next(err);
});


//Automatically verify that server is listening.
http.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


