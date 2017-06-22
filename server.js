var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var port = process.env.PORT || 8000;
var path = require('path');
var vehicles = require('./db/config');
var vehicleRoutes = require('./routes/vehicles');
var indexRoutes = require('./routes/index');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded())
app.use(express.static('public'));
app.use(cors());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/vehicles', vehicleRoutes);
app.use('/', indexRoutes);

app.listen(port, function() {
  console.log('listening on: ', port);
});