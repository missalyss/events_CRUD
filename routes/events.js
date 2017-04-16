var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

//rendering routes
router.get('/', joinTablesAndRender('index'))
// router.get('/:id', findIdAndRender('events/show-one'))



function joinTablesAndRender(location){
  return function (req, res, next) {
    knex('events').then(function (allTables) {
      console.log(allTables);
      res.render(location, {allTables})
    })
  }
}

// function findIdAndRender(location) {
//   return function(req, res, next) {
//     var id = req.params['id']
//     knex('contacts').innerJoin('addresses', 'addresses.id', 'contacts.address_id').where('contacts.id', id).then(function (onePerson) {
//       res.render(location, {onePerson})
//     })
//   }
// }



module.exports = router
