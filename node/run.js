var express = require('express');
var app = express()
  , http = require('http')
  , server = http.createServer(app)
  , io = require('socket.io').listen(server);

app.listen(8080);
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});
