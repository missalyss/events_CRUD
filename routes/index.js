var express = require('express')
var router = express.Router()
var knex = require('../db/knex')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/events')
})

module.exports = router
