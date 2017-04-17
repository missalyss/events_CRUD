var express = require('express');
var router = express.Router();
var knex = require('../db/knex');

//rendering routes
router.get('/', joinTablesAndRender('patrons/patrons-index'))


function joinTablesAndRender(location){
  return function (req, res, next) {
    knex('patrons').then(allPatrons => {
        res.render(location, {allPatrons})
    })
  }
}





module.exports = router
