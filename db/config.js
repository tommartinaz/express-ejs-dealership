var Loki = require('lokijs');
var db = new Loki('loki.json');
var vehicles = db.addCollection('vehicles');

vehicles.insert([
  {
    id: 1,
  year: 2016,
  make: 'Honda',
  model: 'CRV'
},
{
  id: 2,
  year: 2006,
  make: 'Pontiac',
  model: 'Grand AM'
},
{
  id: 3,
  year: 2001,
  make: 'Nissan',
  model: 'Sentra'
},
{
  id: 4,
  year: 2000,
  make: 'Toyota',
  model: 'Celica'
},
{
  id: 5,
  year: 1993,
  make: 'Toyota',
  model: 'Celica'
},
{
  id: 6,
  year: 1990,
  make: 'Chevy',
  model: 'Corsica'
}
]);

module.exports = {
  vehicles: vehicles
};
