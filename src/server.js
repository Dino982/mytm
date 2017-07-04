const express = require('express');
const namer = require('./namer');
const app = express();
const path = require('path');
const pug = require('pug');
const http = require('http')
const port = 8000

app.set('views', './views')
app.set('view engine', 'pug')

app.get('/:name', (req, res) => {
  var name = req.params.name;
  res.render('index', { title: `Hi, ${name}!`, greeting: `Hi, ${name}!`})
});

app.get('/', function(req, res){
  res.render('index')
});

module.exports = app;
if (!module.parent) {
  http.createServer(app).listen(port, function() {
    console.log("Server listening on port" + port);
  });
}
