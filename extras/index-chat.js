var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendfile('index1.html');
});


io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


//app.set('port', (process.env.PORT || 5000));

http.listen(process.env.PORT, function(){
  console.log('listening on *:3000');
});


