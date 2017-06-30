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

router.get('/filter', (req, res) => {
    res.render('index', {
        vehicleList: vehicles.find({
            make: req.query.make
        })
    });
});

router.get('/edit/:id', (req, res) => {
    // console.log(vehicles.find({
    //         id: parseInt(req.params.id)
    //     }));
    
    res.render('edit', {
        vehicle: vehicles.find({
            id: parseInt(req.params.id)
        })[0]
    });
});

router.post('/edit', (req, res) => {
    vehicles.findAndUpdate({
        id: parseInt(req.body.id)}, (data) => {
            data.year = parseInt(req.body.year);
            data.make = req.body.make;
            data.model = req.body.model;
        })
        res.redirect('/');
    });

router.post('/add', function (req, res) {
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