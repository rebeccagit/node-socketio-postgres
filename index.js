var express = require('express');
var app = express();

//var pg = require('pg');
var cons = require('consolidate'); // Templating library adapter for Express

var helmet = require('helmet');
var favicon = require('serve-favicon');

var http = require('http').Server(app);
var io = require('socket.io')(http);

var config = require('config');


app.disable('x-powered-by');
app.use(helmet());

//app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.set('port', (process.env.PORT || 5000));





//pages follow
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

app.get('/db', function(request, response) {
  response.render('pages/db');
});



// Chatroom

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



var pg = require('pg');
//var pgp = require('pg-promise')({
    // Initialization Options
//});

var cn = {
    host: 'ec2-54-83-199-54.compute-1.amazonaws.com', // server name or IP address;
    port: 5432,
    database: 'dbt8cnjfb1iggg',
    user: 'ounefajfybheww',
    password: 'e4Wir2p51_lNHwzRYxLdPX54rC'
};

//var dbt = pg.Client(cn);

pg.connect(process.env.DATABASE_URL, function(err, client) {
  if (err) throw err;
  console.log('Connected to postgres! Getting schemas...');

  client
    .query('SELECT * FROM moviereviews;')
    .on('row', function(row) {
      console.log(JSON.stringify(row));
    });
});

//database - a wip atm


http.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


