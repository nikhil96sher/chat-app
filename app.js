var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var bodyParser = require('body-parser');
var people = {}
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());

app.get('/', function (request, res)
{
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  
  socket.on('join',function(person)
  {
    var msg=person + ' has joined';
    io.emit('chat-message',msg);
    console.log(msg);
    //people.append(person);
  });

  socket.on('chat-message', function(msg){
    io.emit('chat-message', msg);
    console.log('Message : '+msg);
  });
});


var server = http.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
console.log('Example app listening at http://%s:%s', host, port);
});