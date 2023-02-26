var express = require('express');

var app  = express();

app.get('/', function(req, res) {
  res.send('Cybertron Init');
});
app.listen(3000, function() {
  console.log('Listening on port');
  console.log('   http://localhost:3000');
});
