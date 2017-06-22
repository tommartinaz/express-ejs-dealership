var express = require('express');
var router = express.Router();
var vehicles = require('../db/config').vehicles;
var counter = 7;

router.get('/', (req, res) => {
    res.render('index', {
        vehicleList: vehicles.find()
    });
});

router.get('/add', (req, res) => {
    res.render('add');

})

router.post('/add', function(req, res) {
    vehicles.insert({
    id: counter,
    year: req.body.year,
    make: req.body.make,
    model: req.body.model
  })
  counter++;
  res.redirect('/')
})

module.exports = router;