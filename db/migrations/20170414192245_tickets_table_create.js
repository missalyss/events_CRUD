
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', (t) => {
    t.increments()
    t.string('type').notNullable()
    t.integer('price').notNullable()
    t.integer('event_id').notNullable()
    t.integer('patron_id').notNullable()
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets')
}
