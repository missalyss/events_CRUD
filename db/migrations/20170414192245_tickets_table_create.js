
exports.up = function(knex, Promise) {
  return knex.schema.createTable('tickets', (t) => {
    t.increments()
    t.string('name').notNullable()
    t.integer('price').notNullable()
    t.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('tickets')
}
