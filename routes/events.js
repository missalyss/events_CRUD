var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

//rendering routes
router.get('/', joinTablesAndRender('index'))
router.get('/:id/register', findIdAndRender('events/show-one'))



function joinTablesAndRender(location){
  return function (req, res, next) {
    knex('events.*', 'venues.name', 'venues.line_1', 'venues.line_2', 'venues.city', 'venues.zip', 'venues.capacity').from('events').innerJoin('venues', 'events.venue_id', 'venues.id').then(eventsAndVenues => {
      knex('tickets').then(allTickets => {
        eventsAndVenues.allTickets = allTickets
        console.log(eventsAndVenues);
        res.render(location, {eventsAndVenues, allTickets})
//this is all broken and shit. throwing an error deep in the node modules
      })
    })
  }
}

function findIdAndRender(location) {
  return function(req, res, next) {
    var id = req.params.id
      knex('events.*', 'venues.*').from('events').innerJoin('venues', 'events.venue_id', 'venues.id').where('events.id', id).then(oneEvent => {
        knex('tickets').then(allTix => {
          res.render(location, {oneEvent, allTix})

        })
    })
  }
}

router.get('/:id/register')



module.exports = router
