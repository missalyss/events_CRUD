
exports.up = function(knex, Promise) {
  return knex.schema.createTable('patrons_tickets', (t) => {
    t.integer('patron_id').notNullable()
    t.integer('ticket_id').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('patrons_tickets')
}
