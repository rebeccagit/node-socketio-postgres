const express = require('express');
const app = express();
const http = require('http').Server(app);
const router = express.Router(); 
const cons = require('consolidate'); 
const favicon = require('serve-favicon');
const io = require('socket.io')(http); 
const config = require('config');
const pg = require('pg'); 
const helmet = require('helmet'); 
const logger = require("./logger");
app.disable('x-powered-by');
app.use(helmet());
app.use(helmet.noSniff());
require('./routes/routes.js')(app);
logger.debug("All routes enabled");


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
logger.debug("View engine set.")


app.set('port', (process.env.PORT || 5000));


// Chatroom
let numUsers = 0;

io.on('connection', function (socket) {
  let addedUser = false;
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
logger.debug("Socket.io enabled");


app.use(function(req, res, next) {
    //res.status(404).send('The page you\'re looking for does not exist! Please try another page.');
	res.status(404).render('pages/animations/animations14'); 
});


http.listen(app.get('port'), function() {
  console.log('Hiya, node is running on port ', app.get('port'));
  logger.info("Listening on " + app.get('port'));
});


/*
const server = app.listen(app.get('port'), function() {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
});
*/