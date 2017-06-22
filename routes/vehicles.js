var express = require('express');
var router = express.Router();
var vehicles = require('../db/config').vehicles;
var idCounter = 7;

router.get('/', (req, res) => {
    res.render('index', {
        vehicleList: vehicles.find()
    });
});

router.get('/:id', (req,res) => {
    //console.log(req.params.id);
    res.render('index', {
    vehicleList: vehicles.find({id: parseInt(req.params.id)})
    });
});

router.post('/', (req,res) => {
    vehicles.insert({
        id: idCounter,
        year: parseInt(req.body.year),
        make: req.body.make,
        model: req.body.model
    });
    idCounter++;
    res.send(vehicles.find());
});

router.patch('/:id', (req, res) => {
    vehicles.findAndUpdate({id: parseInt(req.params.id)}, function(data) {
        data.year = parseInt(req.body.year);
        data.make = req.body.make;
        data.model = req.body.model;
    });
    res.send(vehicles.find({id: parseInt(req.params.id)}));
});

router.delete('/:id', (req, res) => {
    vehicles.findAndRemove({id: parseInt(req.params.id)});
    res.send(vehicles.find());
});


module.exports = router;