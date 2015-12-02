var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', function (req, res)
{
  res.sendFile(__dirname + '/index.html');
});

/*app.get(,function (req,res) {
	res.sendFile(__dirname + url);
})
*/
io.on('connection', function(socket){
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