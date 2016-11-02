var express = require('express');
// var favicon = require('serve-favicon');

var app = express();
// app.use(favicon(__dirname + '/public/favicon.ico'));

app.get('/', function (req, res) {
  res.sendFile(__dirname+'/index.html');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
