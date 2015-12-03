var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var people = {};
var colors = {};
var randomColor = require('randomcolor');

app.use(express.static('public'));

app.get('/', function (request, res)
{
  res.sendFile(__dirname + '/index.html');
});

function getrandomcolor()
{
  return randomColor({
    luminosity:'dark'
  });
}

io.on('connection', function(socket){

  socket.on('join',function(person)
  {
    var msg=person+' has joined';
    people[socket.id]=person;
    var color = getrandomcolor();
    colors[socket.id]=color;
    io.emit('notice',msg);
    io.emit('active-people',people);
  });

  socket.on('disconnect',function(person)
  {
    var check = socket.id in people;
    if(check)
    {
    var msg=people[socket.id]+' has left';
    io.emit('notice',msg);
    delete people[socket.id];
    io.emit('active-people',people);
    }
  });

  socket.on('chat-message', function(msg)
  {
    io.emit('chat-message', people[socket.id],colors[socket.id],msg);
  });

});


var server = http.listen(3000, function () {
var host = server.address().address;
var port = server.address().port;
console.log('Example app listening at http://%s:%s', host, port);
});