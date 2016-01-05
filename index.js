var express = require('express');
var app = express();
var pg = require('pg');
var cons = require('consolidate'); // Templating library adapter for Express
var helmet = require('helmet');
var favicon = require('serve-favicon');


//begin socket server
var http = require('http').Server(app);

//end socket server


app.use(express.static('public'));
app.use(helmet());
app.use(express.static(__dirname + '/public'));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.disable('x-powered-by');

app.set('port', (process.env.PORT || 5000));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');



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
  response.sendFile('pages/chat');
});


//database - a wip atm or whatever --- :p
//app.get('/db', function (request, response) {
//  pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//    client.query('SELECT * FROM test_table', function(err, result) {
//      done();
//      if (err)
//       { console.error(err); response.send("Error " + err); }
//      else
//       { response.render('pages/db', {results: result.rows} ); }
//    });
//  });
//})

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

//socket
http.listen(app.get('port'), function(){
  console.log('listening on *:3000');
});

